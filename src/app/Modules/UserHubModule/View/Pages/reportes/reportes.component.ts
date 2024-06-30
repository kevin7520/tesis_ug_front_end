import { Component, OnInit } from '@angular/core';
import { ProfesorService } from '../../../Service/profesor.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Chart, ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {

  constructor(private _profesprService : ProfesorService) { }

  juegos: any[] = [];
  displayedColumns: string[] = ['seleccion', 'id_juego', 'tipo', 'fecha_creacion', 'fecha_finalizacion', 'estado'];

  dataSource = new MatTableDataSource<any>(this.juegos);
  selection = new SelectionModel<any>(true, []);

  chart!: Chart;
  
  ngOnInit() {
    this.buscarJuegos();
    this.obtenerDatosReportes();
  }

  buscarJuegos() {
    const dataLocal = JSON.parse(localStorage.getItem('persona')!);
    const criteria = {
      id: dataLocal.id
    }
    this._profesprService.obtenerJuegosProfesor(criteria).subscribe(Response => {
      if(Response.msg == 'OK') {
        this.juegos = Response.result.map((data : any)=>{
          switch(data.id_tipo_juego) {
            case "1":
              data.tipo_juego = 'tipo-juego.juego-1-title'
              break;
            case "2":
              data.tipo_juego = 'tipo-juego.juego-2-title'
              break;
            case "3":
              data.tipo_juego = 'tipo-juego.juego-3-title'
              break;
          };
          return data
        });
        this.dataSource = new MatTableDataSource<any>(this.juegos);
        this.selection = new SelectionModel<any>(true, []);
      }
    })
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  obtenerDatosReportes() {
    const criteria = {
      id_usuario: "2",
      id_juego: "1020"
    }
    this._profesprService.obtenerDatosReportes(criteria).subscribe(data => {
      debugger;
    })
  }

  duu = 0;
  public openPDF(): void {
    if(this.duu == 0) {
      const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };
  
      // Creamos la gráfica
      this.chart = new Chart("chart", {
        type: 'pie' as ChartType, // tipo de la gráfica 
        data // datos 
      })
    }
    this.duu = 1

    ///////////////////////
    let DATA: any = document.getElementById('htmlData');

    html2canvas(DATA, { scale: 5, useCORS: true }).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;

      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);

      PDF.save('angular-demo.pdf');
    });
  }

}
