import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();

  constructor(private httpservice: HttpService) { }


  submit(data: any) {
    let httpOptions = {
      httpOptions: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    console.log("Data in Data services : ", data);

    return this.httpservice.postService('users', data, false, httpOptions)
  }

  allName() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    return this.httpservice.getService('users', false, httpOptions)
  }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }


  update(data:any,url:any){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    return this.httpservice.putService('users/'+url,data,false,httpOptions)
  }
 
}
