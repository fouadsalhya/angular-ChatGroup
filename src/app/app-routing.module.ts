import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegistreComponent } from './components/registre/registre.component';
import { LoginComponent } from './components/login/login.component';
import { GroupComponent } from './components/group/group.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:'' , redirectTo:'group' , pathMatch:'full'},
  {path:'group' , component:GroupComponent , canActivate:[AuthGuard] },
  {path:'login' , component:LoginComponent},
  {path:'registre' , component:RegistreComponent},
  {path:'**' , component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
