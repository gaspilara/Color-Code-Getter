import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { AppRoutingModule } from './app-routing.module';
import { BoardComponent } from './components/board/board.component';
import { QuantitySwitcherComponent } from './components/quantity-switcher/quantity-switcher.component';
import { SquaresContainerComponent } from './components/squares-container/squares-container.component';
import { SquareComponent } from './components/square/square.component';
import { ButtonQuantityComponent } from './components/button-quantity/button-quantity.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  BoardComponent,
  QuantitySwitcherComponent,
  SquaresContainerComponent,
  SquareComponent,
  ButtonQuantityComponent,
],
imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ClipboardModule,
  ],
  providers: [],
  bootstrap: [
    BoardComponent,
    QuantitySwitcherComponent,
    SquaresContainerComponent,
    SquareComponent,
    ButtonQuantityComponent,
  ]
})
export class AppModule { }
