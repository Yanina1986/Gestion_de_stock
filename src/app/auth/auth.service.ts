import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://127.0.0.1/phpmyadmin/';

  constructor(private http: HttpClient) {}

  registrar(usuario: any) {
    return this.http.post(`${this.apiUrl}/register`, usuario);
  }
  login(credenciales: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credenciales);
  }
}
