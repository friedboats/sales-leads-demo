import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { AccountsPanelComponent } from './components/accounts-panel/accounts-panel.component';
import { SalesLeadsPanelComponent } from './components/sales-leads-panel/sales-leads-panel.component';
import { SalesLeadsItemComponent } from './components/sales-leads-item/sales-leads-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BreadcrumbsComponent,
    AccountsPanelComponent,
    SalesLeadsPanelComponent,
    SalesLeadsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
