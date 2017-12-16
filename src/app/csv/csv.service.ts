import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
// import { AuthGuard } from "../_services/authgaurd";


@Injectable()
export class CsvService {
constructor(private http: Http) { }
 
postFile(data) {
   
    return this.http.post("http://1f9fe639.ngrok.io/api/import_csv_file",data)
    
                .map(res => res.json());
}
}