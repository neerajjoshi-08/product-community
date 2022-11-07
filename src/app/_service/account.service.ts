import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  login(emailId: string, password: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}/users/authenticate`, { emailId, password });
  }

  testing() {
    console.log("testing")
  }
}
