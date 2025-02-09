import { Routes } from '@angular/router';
import { UserRegistrationComponent } from './components/login/user-registration/user-registration.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeDefaultComponent } from './components/pages/home-default/home-default.component';

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
        title:'question'
    },
    {
        path:'createProject',
        loadComponent:()=>import('./components/login/create-project/create-project.component').then(m=>m.CreateProjectComponent),
        title:'create project'
    },
    {
        path:'joinProject',
        loadComponent:()=>import('./components/login/join-project/join-project.component').then(m=>m.JoinProjectComponent),
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
    {
        path:'**',
        loadComponent:()=>import('./components/error/error.component').then(m=>m.ErrorComponent),
        title:'404 error'
    }
];
