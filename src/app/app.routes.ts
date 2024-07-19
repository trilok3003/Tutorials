import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { TutorialsComponent } from './tutorials/tutorials.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, title: 'App Home Page'},
    {path: 'user', component: UserComponent, title: 'App User Page'},
    {path: 'tutorials', component: TutorialsComponent, title: 'App Tutorials Page'}
];
