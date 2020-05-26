import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fusohorario } from '../model/fusohorario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FusohorarioService {

  constructor(private http: HttpClient) { }

  public listarFusohorario(fusohorario: string): Observable<Fusohorario> {
    return this.http.get<Fusohorario>('http://worldtimeapi.org/api/timezone/' + fusohorario);
  }
}
