import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Square } from '../models/square.model';

@Injectable({
  providedIn: 'root'
})
export class QuantityService {

  public _quantity: number = 0;
  private _quantitySubject: BehaviorSubject<number> = new BehaviorSubject(this._quantity);
  public quantity: Observable<number> = this._quantitySubject.asObservable();

  public _components: Square[] = [];
  private _componentsSubject: BehaviorSubject<Square[]> = new BehaviorSubject(this._components);
  public components: Observable<Square[]> = this._componentsSubject.asObservable();

  square: Square = new Square();

  constructor() {
    this.initComponents();
    this.createComponent(1);
  }
  
  initComponents() {
    if (this._components.length === 0) {
      for (let i = 0; i < 6; i++) {
        this.square.id = i + 1;
        this.square.display = this.square.id === 1 ? true : false;
        this._components.push(this.square);
      }
    }
  }

  createComponent(quantity: number) {
    this._quantitySubject = new BehaviorSubject(quantity);
    this.quantity = this._quantitySubject.asObservable();

    switch (quantity) {
      case 1: { 
        this._components.filter( r => {
          r.display = r.id === quantity ? true : false
          if (r.id === 1) r.display = true;
          console.log (r);
        }); break; 
      } 
      case 2: { 
        this._components.filter( r => {
          r.display = r.id > 0 && r.id < quantity+1 ? true : false
        }); break; 
      } 
      case 4: { 
        this._components.filter( r => {
          r.display = r.id > 0 && r.id < quantity+1 ? true : false
        }); break; 
      } 
      case 6: { 
        this._components.filter( r => {
          r.display = r.id > 0 && r.id < quantity+1 ? true : false
        }); break; 
      } 
    }
  }

}
