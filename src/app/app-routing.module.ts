import { TransactionComponent } from './components/transaction/transaction.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFaxinaComponent } from './components/add-faxina/add-faxina.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserProfileComponent } from './components/userProfile/userProfile.component';

const routes: Routes = [

  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cadastrar', component: AddFaxinaComponent},
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'transaction', component: TransactionComponent},
  {path: 'userprofile', component: UserProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
