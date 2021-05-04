import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableComponent } from './components/table/table.component';
import { SortDirective } from './directives/sort.directive';
import { HttpInterceptorProviders } from './interceptors';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';
import { AccountService } from './services/account.service';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    NavbarComponent,
    SortDirective,
    CardComponent,
    FirstPageComponent,
    SecondPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [AccountService, HttpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
