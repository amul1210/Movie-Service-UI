import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { LinkComponent } from './link/link.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContactComponent, LinkComponent],
  exports: [
    ContactComponent,
    LinkComponent
  ]
})
export class FooterModule { }
