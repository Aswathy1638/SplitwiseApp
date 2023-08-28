import { Component, OnInit } from '@angular/core';
import { SplitwiseService } from './splitwise.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit{
  newExpense: any = {}; 
  expenses: any;

  constructor(private splitwiseService: SplitwiseService) {}
  ngOnInit() {
    this.splitwiseService.getExpenses().subscribe((data: any) => {
      console.log(data); 
      this.expenses = data.expenses;
    });
  }
  

  addExpense() {
    const expenseData = {
      description: 'Expense description',
      cost: 100.00,
      currency_code: 'USD',
      group_id: '123456',
      users: [
        {
          user_id: 'user123',
          paid_share: 50.00,
          owed_share: 25.00
        },
        {
          user_id: 'user456',
          paid_share: 50.00,
          owed_share: 25.00
        }
      ]
    };

    this.splitwiseService.createExpense(expenseData).subscribe(
      response => {
        console.log('Expense added successfully:', response);
      },
      error => {
        console.error('Error adding expense:', error);
      }
    );
  }
}
