import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }

  //create get request to call express backed call /:rep
  get(rep:any, ids:any): Observable<any> {
    return this.http.get(`${baseUrl}/${rep}`, {params: this.addParameters(ids)})
  }

  //use to interpret multiple chemicals to parameter format
  public addParameters(ids:any):HttpParams{
    let params = new HttpParams();
    ids.forEach((id: any) => {
      params = params.append('id', id);
    });
  
    return params
  
  }

}


