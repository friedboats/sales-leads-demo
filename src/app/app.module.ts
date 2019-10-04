import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { AccountsPanelComponent } from './accounts-panel/accounts-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BreadcrumbsComponent,
    AccountsPanelComponent
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
