import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';
import { AlumnoService } from '../../../Service/alumno.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-serios-game',
  templateUrl: './serios-game.component.html',
  styleUrls: ['./serios-game.component.scss']
})
export class SeriosGameComponent implements OnInit{

  subs = new Subscription(); 
  puntos : number = 0;
  REQUERIMIENTOS_DRAGULA = 'ITEMS_JUEGO';
  // public many = ['The', 'possibilities', 'are', 'endless!'];
  // public many2 = ['Explore', 'them'];
  pedirCodigo : boolean = true;
  mostrarRetoAlimentacion : boolean = false;
  mostrarFinilazion : boolean = false;
  retroalimentacion : string = "";
  event: Event | undefined;
  valorCodigo : string = "";

  juegosPublicos: any[] = [];

  requesitosAmbiguos : any[] = []

  requesitosNoAmbiguos : any[] = []

  requisitosNoFuncionales  : any[] = [];

  displayedColumns: string[] = ['position', 'id_juego', 'fecha_creacion', 'fecha_finalizacion', "acctions"];

  public constructor(private dragulaService:DragulaService,private _translateService: TranslateService, private _alumnoService : AlumnoService, private _snackBar: MatSnackBar) {
    this.subs.add(dragulaService.dropModel(this.REQUERIMIENTOS_DRAGULA)
      .subscribe(({ el, target, source, sourceModel, targetModel, item }) => {
        const itemId = target!.id;
        if(itemId != 'requerimientos_no_funcionales') {
          if(item.ambiguo){
            if(itemId == 'requerimientos_ambiguos'){
              item.requerimientoCompleto = 'si',
              this.puntos = (item.requrimientoFallido) ? this.puntos : this.puntos + 100;
            }
            else {
              item.requerimientoCompleto = 'error';
              item.requrimientoFallido = true;
              this.puntos = this.puntos - 100;
              this.retroalimentacion = item.retroAlimentacion;
              this.mostrarRetoAlimentacion = true;
            }
          }
          else {
            if(itemId == 'requerimientos_no_ambiguos'){
              item.requerimientoCompleto = 'si'
              this.puntos = (item.requrimientoFallido) ? this.puntos : this.puntos + 100;
            }
            else {
              item.requerimientoCompleto = 'error';
              item.requrimientoFallido = true;
              this.puntos = this.puntos - 100;
              this.retroalimentacion = item.retroAlimentacion;
              this.mostrarRetoAlimentacion = true;
            }
          }
        }
      })
    );
  
    this.dragulaService.drop(this.REQUERIMIENTOS_DRAGULA)
    .subscribe(({ name, el, target, source, sibling }) => {
      if(this.requisitosNoFuncionales.length == 0 && !this.requesitosAmbiguos.some(requisito => requisito.requerimientoCompleto != 'si') && !this.requesitosNoAmbiguos.some(requisito => requisito.requerimientoCompleto != 'si'))
        this.mostrarFinilazion = true;
    });

    dragulaService.createGroup(this.REQUERIMIENTOS_DRAGULA, {
      moves: (el, container, handle) => {
        return handle!.className.includes('handle bi bi-arrows-move cursor-move');
      },
    });
    
  }
  ngOnInit(): void {
    this.buscarJuegosPublicos();
  }

  buscarJuego() {
    const criteria = {
      id: this.valorCodigo
    }
    this._alumnoService.recuperarJuego(criteria).subscribe((dataResponse) => {
      if(dataResponse.msg == 'OK') {
        const jsonTemp = JSON.parse(dataResponse.result.json);
        this.requisitosNoFuncionales = jsonTemp[0].requerimientos.map((data:any)=> {
          return {
            texto: data.requerimiento,
            retroAlimentacion: data.retroalimentacion,
            ambiguo: (data.opcionRequerimiento == 'NFA') ? true : false,
            requrimientoFallido: data.requerimientoFallido,
            requerimientoCompleto: "no",
            id: data.id

          }
        })
        this.pedirCodigo = false;
      }
      else {
        this.openSnackBar(this._translateService.instant('Código incorrecto'),'custom-snackbar_fallido');
      }
      this.valorCodigo = "";
    })
    
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  openSnackBar(message: string, class_customer: string) {
    const config = new MatSnackBarConfig();
    config.duration = 3000;
    config.verticalPosition = 'top';
    config.horizontalPosition = 'center';
    config.panelClass = "ml-8"
    config.panelClass = [class_customer];
    this._snackBar.open(message,'',config);
  }

  buscarJuegosPublicos() {
    this._alumnoService.recuperJuegosPublicos().subscribe(Response => {
      if(Response.msg == 'OK') {
        this.juegosPublicos = Response.result;
      }
      else{
        this.openSnackBar(this._translateService.instant('Juego no encontrado'),'custom-snackbar_fallido');
      }
    })
  }

  elegirJuego(id : number) {
    const juego = this.juegosPublicos.find(data => data.id_juego == id);
    const jsonTemp = JSON.parse(juego.json);
    this.requisitosNoFuncionales = jsonTemp[0].requerimientos.map((data:any)=> {
      return {
        texto: data.requerimiento,
        retroAlimentacion: data.retroalimentacion,
        ambiguo: (data.opcionRequerimiento == 'NFA') ? true : false,
        requrimientoFallido: data.requerimientoFallido,
        requerimientoCompleto: "no",
        id: data.id

      }
    });
    this.pedirCodigo = false;

  }

}
