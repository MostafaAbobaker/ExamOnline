import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExamInterface } from '../interface/exams';

@Injectable({
  providedIn: 'root'
})
export class ExamsService {

  constructor(private _http:HttpClient) { }

  /* getExams():Observable<ExamInterface> {
    return this._http.get<ExamInterface>('exams')
  } */

  getAllQuestionsExam(id:string):Observable<any> {
    return this._http.get(`questions?exam=${id}`)
  }
}
