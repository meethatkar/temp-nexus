import { Routes } from '@angular/router';
import { UserRegistrationComponent } from './components/login/user-registration/user-registration.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeDefaultComponent } from './components/pages/home-default/home-default.component';
import { authGuard } from './gaurd/auth.guard';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'userLogin',
        loadComponent:()=>import('./components/login/user-login/user-login.component').then(m=> m.UserLoginComponent),
        title:'login'
    },
    {
        path:'userSignup',
        loadComponent:()=>import('./components/login/user-registration/user-registration.component').then(m => m.UserRegistrationComponent),
        title:'signup'
    },
    {
        path:'question',
        loadComponent:()=>import('./components/login/question/question.component').then(m=>m.QuestionComponent),
        canActivate: [authGuard],       //cannot access without login
        title:'question'
    },
    {
        path:'createProject',
        loadComponent:()=>import('./components/login/create-project/create-project.component').then(m=>m.CreateProjectComponent),
        canActivate: [authGuard],       //cannot access without login
        title:'create project'
    },
    {
        path:'joinProject',
        loadComponent:()=>import('./components/login/join-project/join-project.component').then(m=>m.JoinProjectComponent),
        canActivate: [authGuard],       //cannot access without login
        title:'join project'
    },
    {
        path:'myAccount',
        loadComponent:()=>import('./components/pages/my-account/my-account.component').then(m=>m.MyAccountComponent),
        title:'my account'
    },
    {
        path:'home',
        component:HomeDefaultComponent,
        title:'home'
    },
    // {
    //     path:'dashboard',
    //     loadComponent:()=>import('./components/'),
    //     canActivate: [AuthGaurd],
    //     title:'dashboard'
    // },
    {
        path:'**',
        loadComponent:()=>import('./components/error/error.component').then(m=>m.ErrorComponent),
        title:'404 error'
    }
];
