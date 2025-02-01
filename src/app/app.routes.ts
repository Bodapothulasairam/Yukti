import { Routes } from '@angular/router';
import { DashBoardComponent } from './component/dash-board/dash-board.component';
import { ApplicationFormComponent } from './component/application-form/application-form.component';
import { HelpComponent } from './component/help/help.component';
import { ProfileComponent } from './component/profile/profile.component';
import { HomeComponent } from './component/home/home.component';
import { LogInComponent } from './component/log-in/log-in.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';

export const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'dashboard', component: DashBoardComponent},
    {path: 'login', component: LogInComponent},
    { path: 'sign-up', component: SignUpComponent },
    { path: 'application-form', component: ApplicationFormComponent },
    { path: 'help', component: HelpComponent },
    { path: 'profile', component: ProfileComponent },
    { path: '**', redirectTo: '/' }
];
