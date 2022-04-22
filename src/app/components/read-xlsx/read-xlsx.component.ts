import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-read-xlsx',
  templateUrl: './read-xlsx.component.html',
  styleUrls: ['./read-xlsx.component.scss']
})
export class ReadXlsxComponent implements OnInit {

  public target: DataTransfer | undefined;
  
  constructor() { }

  ngOnInit(): void { }

  incomingFile(event: any) {
    this.target = <DataTransfer>(event.target);
    if (this.target.files.length !== 1) {
      throw new Error('Cannot use multiple files');
    }
  }

  processFile() {
    const reader: FileReader = new FileReader();
   
    reader.readAsBinaryString(this.target!.files[0]);
    reader.onload = (e: any) => {
      /* Creamos el objeto WorkBook con los datos del fichero cargado */
      const binarystr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(binarystr, { type: 'binary' });

      /* Recorremos los nombres de las hojas */

      wb.SheetNames.forEach((sheetName: string) => {
        console.log(`Sheet name: ${sheetName}`);

        /* Obtenemos los datos de las hojas */
        const sheet: XLSX.WorkSheet = wb.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(sheet);
        console.log(data); // Data will be logged in array format containing objects
      });
    };
  }

  

}
