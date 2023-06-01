import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../model/response.model';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  //api url
  baseApiUrl: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  //post employee
  saveResponse(response: Response): Observable<Response> {
    return this.http.post<Response>(this.baseApiUrl + '/survey/save', response);
  }
}
