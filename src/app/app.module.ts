import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { AccountsPanelComponent } from './components/accounts-panel/accounts-panel.component';
import { SalesLeadsPanelComponent } from './components/sales-leads-panel/sales-leads-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BreadcrumbsComponent,
    AccountsPanelComponent,
    SalesLeadsPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
