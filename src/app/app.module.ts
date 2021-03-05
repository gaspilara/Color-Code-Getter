import { NgModule } from '@angular/core';

// IMPORTS
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ClipboardModule } from '@angular/cdk/clipboard';

// COMPONENTS
import { BoardComponent } from './components/board/board.component';
import { QuantitySwitcherComponent } from './components/board/quantity-switcher/quantity-switcher.component';
import { SquaresContainerComponent } from './components/board/squares-container/squares-container.component';
import { SquareComponent } from './components/board/squares-container/square/square.component';
import { ButtonQuantityComponent } from './components/board/quantity-switcher/button-quantity/button-quantity.component';
import { InfoColorComponent } from './components/board/squares-container/square/info-color/info-color.component';
import { InputColorComponent } from './components/board/squares-container/square/input-color/input-color.component';

@NgModule({
  declarations: [
  BoardComponent,
  QuantitySwitcherComponent,
  SquaresContainerComponent,
  SquareComponent,
  ButtonQuantityComponent,
  InfoColorComponent,
  InputColorComponent,
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
    InfoColorComponent,
    InputColorComponent,
  ]
})
export class AppModule { }
