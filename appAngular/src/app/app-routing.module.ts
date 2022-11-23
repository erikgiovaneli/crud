import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { NotaComponent } from './pages/nota/nota.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import {ClienteComponent} from "./pages/cliente/cliente.component";

const routes: Routes = [
  {
    path: 'produto',
    component: ProdutoComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'cliente',
    component: ClienteComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'nota',
    component: NotaComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), DxDataGridModule, DxFormModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [
    HomeComponent
  ]
})
export class AppRoutingModule { }
