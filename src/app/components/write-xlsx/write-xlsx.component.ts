import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-write-xlsx',
  templateUrl: './write-xlsx.component.html',
  styleUrls: ['./write-xlsx.component.scss']
})
export class WriteXlsxComponent implements OnInit {

  public contentString: string | undefined;

  constructor() { }

  ngOnInit(): void { }

  generateFile() {
    /* Convertimos el contenido a JSON */
    const content = JSON.parse(this.contentString!);

    /* Creamos una nueva hoja con el contenido */
    const sheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(content);

    /* Creamos un nuevo excel*/
    const wb: XLSX.WorkBook = XLSX.utils.book_new();

    /* Añadimos la hoja al nuevo excel */
    XLSX.utils.book_append_sheet(wb, sheet, "Hoja 1");

    /* Guardamos el fichero */
    XLSX.writeFile(wb, "sheetjs.xlsx");
  }

}
