import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import {ClienteModule} from "./pages/cliente/cliente.module";
import { DxDataGridModule } from 'devextreme-angular';
import {HttpClientModule} from "@angular/common/http";
import {ProdutoModule} from "./pages/produto/produto.module";
import {NotaModule} from "./pages/nota/nota.module";
import {NotaService} from "./shared/services/nota.service";
import {ClienteService} from "./shared/services/cliente.service";
import {ProdutoService} from "./shared/services/produto.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    ReactiveFormsModule,
    FooterModule,
    UnauthenticatedContentModule,
    AppRoutingModule,
    ClienteModule,
    ProdutoModule,
    NotaModule,
    DxDataGridModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService,
    NotaService,
    ClienteService,
    ProdutoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
