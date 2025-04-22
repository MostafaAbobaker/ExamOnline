import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  createTimer(seconds: number): Observable<number> {
    return new Observable(observer => {
      let remainingTime = seconds;

      const intervalId = setInterval(() => {
        if (remainingTime > 0) {
          remainingTime--;
          observer.next(remainingTime);
        } else {
          clearInterval(intervalId);
          observer.complete();
        }
      }, 1000); // Count down every second
    });
  }

}
