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

  //total surveyers
  getTotalSurveyers() : Observable<number>{
    return this.http.get<number>(this.baseApiUrl + '/survey/total-surveyers')
  }

  //average age
  getAverageAge(): Observable<number>{
    return this.http.get<number>(this.baseApiUrl + '/survey/average-age')
  }

  //oldest
  getOldest(): Observable<number>{
    return this.http.get<number>(this.baseApiUrl + '/survey/oldest')
  }

  //youngest
  getYoungest(): Observable<number>{
    return this.http.get<number>(this.baseApiUrl + '/survey/youngest')
  }

  //percentage-pizza-likers
  getPizzaLikers(): Observable<number>{
    return this.http.get<number>(this.baseApiUrl + '/survey/percentage-pizza-likers')
  }

  //percentage-pasta-likers
  getPastaLikers(): Observable<number>{
    return this.http.get<number>(this.baseApiUrl + '/survey/percentage-pasta-likers')
  }

  //percentage-padandwors-likers
  getPapAndWorsLikers(): Observable<number>{
    return this.http.get<number>(this.baseApiUrl + '/survey/percentage-padandwors-likers')
  }

  //eat-out-average
  getEatOutAverage(): Observable<number>{
    return this.http.get<number>(this.baseApiUrl + '/survey/eat-out-average')
  }

  //watch-movie-average
  getWatchMovieAverage(): Observable<number>{
    return this.http.get<number>(this.baseApiUrl + '/survey/watch-movie-average')
  }

  //watch-tv-average
  getWatchTvAverage(): Observable<number>{
    return this.http.get<number>(this.baseApiUrl + '/survey/watch-tv-average')
  }

  //listen-radio-average
  getRadioListeningAverage(): Observable<number>{
    return this.http.get<number>(this.baseApiUrl + '/survey/listen-radio-average')
  }
}
