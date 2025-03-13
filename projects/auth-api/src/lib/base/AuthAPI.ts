import { Observable } from "rxjs";

export abstract class AuthAPI {
  abstract login(data:any): Observable<any>;
}
