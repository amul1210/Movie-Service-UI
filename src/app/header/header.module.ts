import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { SearchComponent } from './search/search.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LogoComponent, SearchComponent, AccountComponent],
  exports:[
    LogoComponent,
    SearchComponent,
    AccountComponent
  ]
})
export class HeaderModule { }
