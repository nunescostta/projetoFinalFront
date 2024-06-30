import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private apiUrl = 'http://localhost:8095/projetofinal/clientes';

  constructor(
    
    private httpClient: HttpClient
  
  ){}

  getTestMessage(): Observable<string> {
    return this.httpClient.get(this.apiUrl, { responseType: 'text' });
  }
}
