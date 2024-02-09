import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginUser } from './login-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://122.170.12.63:90/api/auth/login';
  private tokenKey = 'authToken';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) {}

  private hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  login(email: string, password: string, organizationUrl: string): Observable<any> {
    const body = { email, password, organizationUrl };
    return this.http.post(this.apiUrl, body);
  }

  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
    console.log('Token saved:', token);
    this.isAuthenticatedSubject.next(true);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.isAuthenticatedSubject.next(false);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
