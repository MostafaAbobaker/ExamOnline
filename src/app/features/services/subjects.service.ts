import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubjectsInterface } from '../interface/subjects';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

    constructor(private _http:HttpClient) { }

    getSubjects(num?:number):Observable<SubjectsInterface> {
      return this._http.get<SubjectsInterface>(`subjects?limit=${num}`)
    }
    getAllExams(id:string):Observable<any> {
      return this._http.get(`exams?subject=${id}`)
    }
    getSingleSubject(id:string) :Observable<any> {
      return this._http.get(`subjects/${id}`)
    }
    /* getCourseDetails(id:string):Observable<any> {
      return this._http.get(``)
    } */
}
