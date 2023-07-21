import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
// { path: 'maite', component: MaiteComponent}, //lleva al componente
 { path: '**', redirectTo: '', pathMatch: 'full'},
 { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }, //redirije a la Home se ejecuta esta primero que la de abajo
 //{ path: '**', component: MaiteComponent}, //si le pifia de url lleva a un componente ejemplo 404 todas se ejecutan por orden
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
