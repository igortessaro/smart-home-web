import { Component, OnInit } from "@angular/core";
import { Expense } from "src/app/models/expense.model";
import { Period } from "src/app/models/period.model";
import { ExpenseService } from "src/app/services/expense.service";

@Component({
    selector: "app-view-expenses",
    templateUrl: "./view-expenses.component.html",
    styleUrls: ["./view-expenses.component.scss"],
})
export class ViewExpensesComponent implements OnInit {
    public expenses: Expense[] = [];
    public displayedColumns: string[] = ['name', 'amount', 'dueDate', 'payDate', 'category', 'createBy'];
    public selectedPeriod: Period = { year: 2023, month: 5 };

    constructor(private expenseService: ExpenseService) {}

    ngOnInit(): void {
        this.expenseService
            .getByPeriod(this.selectedPeriod)
            .subscribe((expenses) => (this.expenses = expenses));
    }
}
