import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-serios-game',
  templateUrl: './serios-game.component.html',
  styleUrls: ['./serios-game.component.scss']
})
export class SeriosGameComponent{

  subs = new Subscription(); 
  puntos : number = 0;
  REQUERIMIENTOS_DRAGULA = 'ITEMS_JUEGO';
  // public many = ['The', 'possibilities', 'are', 'endless!'];
  // public many2 = ['Explore', 'them'];
  pedirCodigo : boolean = true;
  mostrarRetoAlimentacion : boolean = false;
  mostrarFinilazion : boolean = false;
  retroalimentacion : string = "";
  event: Event | undefined

  public constructor(private dragulaService:DragulaService) {
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

  buscarJuego() {
    this.pedirCodigo = false;
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }


  requesitosAmbiguos : any[] = []

  requesitosNoAmbiguos : any[] = []

  requisitosNoFuncionales  : any[] = [
    { texto : "El sistema debe ser rápido", retroAlimentacion: "Ambiguo porque no especifica qué se considera rápido.", ambiguo: false, id: "1RequerimientoAmbiguo", requerimientoCompleto: 'no', requrimientoFallido: false},
    { texto : "El sistema debe ser fácil de usar", retroAlimentacion: "Ambiguo porque la facilidad de uso puede interpretarse de diferentes maneras.", ambiguo: true, id: "2RequerimientoAmbiguo", requerimientoCompleto: 'no',  requrimientoFallido: false},
    { texto : "El sistema debe ser seguro", retroAlimentacion: "Ambiguo porque no especifica qué tipo de seguridad se necesita. ¿Seguridad de datos, seguridad física, seguridad en el acceso?", ambiguo: true, id: "3RequerimientoAmbiguo", requerimientoCompleto: 'no',  requrimientoFallido: false},
    { texto : "El sistema debe ser confiable", retroAlimentacion: "Ambiguo porque no define qué se entiende por confiable. ¿Cuál es el nivel de fiabilidad requerido?", ambiguo: true, id: "4RequerimientoAmbiguo", requerimientoCompleto: 'no',  requrimientoFallido: false},
    { texto : "El sistema debe ser fácil de mantener", retroAlimentacion: "Ambiguo porque no define qué aspectos de mantenimiento se consideran. ¿Se refiere a la facilidad de realizar actualizaciones, correcciones de errores, etc.?", ambiguo: true, id: "5RequerimientoAmbiguo", requerimientoCompleto: 'no',  requrimientoFallido: false},
    { texto : "El sistema debe ser eficiente", retroAlimentacion: "Ambiguo porque no especifica qué se entiende por eficiencia. ¿Se refiere al uso eficiente de recursos como la memoria o el procesador?", ambiguo: true, id: "6RequerimientoAmbiguo", requerimientoCompleto: 'no',  requrimientoFallido: false},
    { texto : "El sistema debe ser escalable", retroAlimentacion: "Ambiguo porque no indica cómo se medirá la escalabilidad. ¿Cuántos usuarios adicionales debe poder soportar el sistema?", ambiguo: true, id: "7RequerimientoAmbiguo", requerimientoCompleto: 'no',  requrimientoFallido: false},
    { texto : "El sistema debe estar siempre disponible", retroAlimentacion: "Ambiguo porque no define qué se entiende por siempre disponible. ¿Cuál es el tiempo máximo de inactividad permitido?", ambiguo: true, id: "8RequerimientoAmbiguo", requerimientoCompleto: 'no',  requrimientoFallido: false},
    { texto : "El sistema debe ser adaptable a diferentes entornos", retroAlimentacion: "Ambiguo porque no especifica qué tipo de adaptabilidad se requiere. ¿Se refiere a la adaptación a diferentes dispositivos, entornos de red, etc.?", ambiguo: true, id: "9RequerimientoAmbiguo", requerimientoCompleto: 'no',  requrimientoFallido: false},
  ]

}
