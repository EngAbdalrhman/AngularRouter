import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CalcComponent } from './pages/calc/calc.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'calc', component: CalcComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], // use hash to not repload when routing
  exports: [RouterModule],
})
export class AppRoutingModule {}
