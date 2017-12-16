import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { CsvService } from './csv.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrls: ['./csv.component.sass'],
  providers: [CsvService]

})
export class CsvComponent {


  fileObj: any

  csvUrl: string = 'sample.csv';  // URL to web API
  csvData: any[] = [];
  file: string;
  successMsg : boolean;
  constructor(private http: Http,public csvService:CsvService) {
    this.fileObj = {};
    this.successMsg =false;
    
  }

  submit() {
    console.log(this.file)
  }
  //post api for advisory
    submitAdv(event) {
      console.log(event.target.files[0],"values")
      let formData = new FormData();
      formData.append('file', event.target.files[0]);
      //  console.log(formValues, "formValues")
          console.log(formData,"data")
          this.csvService.postFile(formData)
            .subscribe(resp => {
              console.log(resp,"helloCsv")
              console.log(resp.message);
              this.successMsg =true;
            },
            error => {
              console.log(error)
              this.successMsg =false;
        })
      }
  
}


