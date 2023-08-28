import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SplitwiseService {
  private apiUrl = 'https://localhost:7231/api/Splitwise/'; 

  constructor(private http: HttpClient) { }

  getExpenses() {
    return this.http.get(this.apiUrl + 'getExpenses');
  }
  createExpense(expenseData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(`${this.apiUrl}createExpense`, expenseData, { headers })
      .pipe(
        catchError((error: any) => {
          console.error('Error creating expense:', error);
          return throwError(error);
        })
      );
  }
  
}
