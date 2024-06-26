import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';
import { environment } from '../../../environments/environment';
import { Signalement } from '../../models/signalement';
import { from, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SignalementService {
  constructor(
    private http: HttpClient,
    private auth: AuthService,
  ) {}

  // GET
  getSignalements(): Observable<Signalement[]> {
    return this.createHeaders().pipe(
      switchMap((headers) => {
        return this.http.get<Signalement[]>(
          environment.apiUrl + '/signalement',
          { headers },
        );
      }),
    );
  }

  // GET by ID
  getSignalementById(id: number): Observable<Signalement> {
    return this.createHeaders().pipe(
      switchMap((headers) => {
        return this.http.get<Signalement>(
          environment.apiUrl + '/signalement/' + id,
          { headers },
        );
      }),
    );
  }

  // POST
  createSignalement(signalement: Signalement): Observable<Signalement> {
    return this.createHeaders().pipe(
      switchMap((headers) => {
        return this.http.post<Signalement>(
          environment.apiUrl + '/signalement',
          signalement,
          { headers },
        );
      }),
    );
  }

  // DELETE
  deleteSignalement(id: number): Observable<Signalement> {
    return this.createHeaders().pipe(
      switchMap((headers) => {
        return this.http.delete<Signalement>(
          environment.apiUrl + '/signalement/' + id,
          { headers },
        );
      }),
    );
  }

  // UPDATE
  updateSignalement(signalement: Signalement): Observable<Signalement> {
    return this.createHeaders().pipe(
      switchMap((headers) => {
        return this.http.put<Signalement>(
          environment.apiUrl + '/signalement',
          signalement,
          { headers },
        );
      }),
    );
  }

  private createHeaders(): Observable<HttpHeaders> {
    return from(this.auth.getAccessTokenSilently()).pipe(
      map((token) => {
        return new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        });
      }),
    );
  }
}
