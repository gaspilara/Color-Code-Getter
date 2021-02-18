import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { AppRoutingModule } from './app-routing.module';
import { BoardComponent } from './components/board/board.component';
import { QuantitySwitcherComponent } from './components/board/quantity-switcher/quantity-switcher.component';
import { SquaresContainerComponent } from './components/board/squares-container/squares-container.component';
import { SquareComponent } from './components/board/squares-container/square/square.component';
import { ButtonQuantityComponent } from './components/board/quantity-switcher/button-quantity/button-quantity.component';
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
