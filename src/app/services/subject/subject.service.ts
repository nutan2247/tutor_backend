import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import *as featureInterface from '../interfaces/interface'

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
// url = 'http://localhost:3000/admin/subject/list'
  constructor(private http:HttpClient) { }

  getData(): Observable<any>{
    return this.http.get<any>(featureInterface.subjectList);
   }
   create(data:any): Observable<any>{
    return this.http.post<any>(featureInterface.subjectAdd,data);
   }
}
