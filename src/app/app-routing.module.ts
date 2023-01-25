import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CurrentElectionComponent } from './current-election/current-election.component';
import { NavComponent } from './nav/nav.component';
import {PastComponent} from './past/past.component';
import {UpcomingComponent} from './upcoming/upcoming.component'


const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'main', component: NavComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'current', component: CurrentElectionComponent },
      { path: 'past', component: PastComponent },
      { path: 'upcoming', component: UpcomingComponent },
      { path: '**', redirectTo: '/main/dashboard' },
    ]
  },
  { path: '**', redirectTo: '/' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
