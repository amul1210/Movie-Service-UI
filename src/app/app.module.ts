import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { BodyModule } from './body/body.module';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { FooterModule } from './footer/footer.module'
import { WishComponent } from './body/wish/wish.component';
import { DataComponent } from './body/data/data.component';
import { SearchResultsComponent } from './body/search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    BodyModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FooterModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: DataComponent },
      {path : 'wishlist', component : WishComponent },
      {path : 'search/:movie', component : SearchResultsComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
