import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { RecipesComponent } from './recipes/recipes.component';
import { FormoreComponent } from './formore/formore.component';
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { HomeComponent } from "./home/home.component";


const routes: Routes = [
  {path:"register",component:RegisterComponent},
  {path:"recipes",component:RecipesComponent},
  {path:"formore",component:FormoreComponent},
  {path:"login",component:LoginComponent},
  {path: "logout", component: LogoutComponent},
  {path: "home", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
