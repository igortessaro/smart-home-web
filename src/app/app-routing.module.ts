import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewExpensesComponent } from './pages/expenses/view-expenses/view-expenses.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
    { path:  '', component:  HomeComponent},
    { path:  'home', component:  HomeComponent},
    { path:  'expenses', component:  ViewExpensesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
