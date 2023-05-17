import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Expense } from "../models/expense.model";
import { Period } from "../models/period.model";

@Injectable({
    providedIn: "root",
})
export class ExpenseService {
    constructor(private http: HttpClient) {}

    public getByPeriod(period: Period): Observable<Expense[]> {
        return this.http.get<Expense[]>(`http://localhost:5076/expenses?Year=${period.year}&Month=${period.month}`);
    }
}
