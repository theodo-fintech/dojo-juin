import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/shared/guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {InstructionComponent} from "./instruction/instruction.component";
import {InvestComponent} from "./invest/invest.component";
import {AssetsComponent} from "./assets/assets.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'invest',
    component: InvestComponent,
  },
  {
    path: 'assets',
    component: AssetsComponent,
  },
  {
    path: 'instructions',
    component: InstructionComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
