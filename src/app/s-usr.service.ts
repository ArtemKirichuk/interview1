import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subject } from 'rxjs';
import * as moment from 'moment';
interface ifResp{
  data:ifUsr[]
}
export interface ifUsr{
  name:string,
  birth_year:string
}
@Injectable({
  providedIn: 'root'
})
export class SUsrService {
  sUrl = 'https://swapi.dev/api/people/'
  constructor(private http: HttpClient) { 

  }
  obUsr:Subject<ifUsr> = new Subject<ifUsr>();
  // fnSetUsr(usr:ifUsr){
  //   this.obUsr.next(usr);
  //   // return this.http.put(this.sUrl,usr)
  // }
  fnGetUsr():Observable<ifUsr[]> {
    return this.http.get<any>(this.sUrl)
    .pipe(
      map((usr)=>{
        const aUsr:ifUsr[] = usr.results?.map((i: any)=>{
          return {
            name: i.name,
            birth_year : i.birth_year
          }
        });
        return aUsr
    }))
  }
}

