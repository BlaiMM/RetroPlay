import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServeisDadesService {

  constructor(private http:HttpClient) { }

  FesLogin(nom: any, password: any): Observable<any> {
    return this.http.post('http://retroplay.mygamesonline.org/comprovarLogin.php',{username: nom, pass: password} );
    }
}

