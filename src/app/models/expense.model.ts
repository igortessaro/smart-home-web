export interface Expense {
    id: string;
    name: string;
    description: string;
    amount: number;
    dueDate: Date;
    payDate: Date;
    createBy: string;
    createAt: Date;
    category: string;
}
