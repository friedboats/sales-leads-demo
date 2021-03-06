import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { AccountsPanelComponent } from './components/accounts-panel/accounts-panel.component';
import { SalesLeadsPanelComponent } from './components/sales-leads-panel/sales-leads-panel.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { SalesLeadsListComponent } from './components/sales-leads-list/sales-leads-list.component';
import { SalesLeadsFormComponent } from './components/sales-leads-form/sales-leads-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BreadcrumbsComponent,
    AccountsPanelComponent,
    SalesLeadsPanelComponent,
    PreloaderComponent,
    SalesLeadsListComponent,
    SalesLeadsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }