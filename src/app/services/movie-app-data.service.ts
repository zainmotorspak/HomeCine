import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieAppDataService {
  constructor(
    private http: HttpClient
  ) { }

  public getNowPlaying(): Observable<any> {
    return this.http.get("https://excel2json.io/api/share/15755be7-cee3-4b74-4382-08da496bf5f2");
  }

  public getMovieList(): Observable<any> {
    return this.http.get("https://excel2json.io/api/share/99cd7568-0b49-4c09-4387-08da496bf5f2");
  }

  public getTheatres(): Observable<any> {
    return this.http.get("https://excel2json.io/api/share/5435e256-3846-4895-4385-08da496bf5f2");
  }

  public getShowtimes(): Observable<any> {
    return this.http.get("https://excel2json.io/api/share/f179620a-3bb6-49cd-4384-08da496bf5f2");
  }

  public getTheatresNearYou(): Observable<any> {
    return this.http.get("https://excel2json.io/api/share/49f543dc-9c4e-43e8-4386-08da496bf5f2");
  }

  public getMyPurchases(): Observable<any> {
    return this.http.get("https://excel2json.io/api/share/3f89384c-e58f-429a-4388-08da496bf5f2");
  }
}
