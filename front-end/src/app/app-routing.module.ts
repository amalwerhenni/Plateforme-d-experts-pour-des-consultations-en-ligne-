import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UsDashComponent } from './us-dash/us-dash.component';
import { ExpDashComponent } from './exp-dash/exp-dash.component';
import { NavbarSidebarComponent } from './navbar-sidebar/navbar-sidebar.component';
import { ProfExpComponent } from './prof-exp/prof-exp.component';

const routes: Routes = [
  // Route par défaut (sign-up page)
  { path: '', component: LoginComponent },

  // Routes pour l'inscription et la connexion
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },

  // Route pour NavbarSidebar, avec des routes enfants pour us-dash et exp-dash
  {
    path: 'nav',
    component: NavbarSidebarComponent,
    children: [
      { path: 'usdash', component: UsDashComponent },  // Tableau de bord utilisateur
      { path: 'expdash', component: ExpDashComponent },  // Tableau de bord expert
      { path: 'expprof', component: ProfExpComponent },  // Profil expert
      { path: '', redirectTo: 'usdash', pathMatch: 'full' },  // Redirection par défaut vers usdash
    ]
  },

  // Route wildcard pour les chemins inconnus
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
