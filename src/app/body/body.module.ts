import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { DataComponent } from './data/data.component';
import { MatCardModule } from '@angular/material/card';
import { WishComponent } from './wish/wish.component';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [DataComponent, CardsComponent, WishComponent, SearchResultsComponent],
  exports:[
    DataComponent,
    CardsComponent
  ]
})
export class BodyModule { }
