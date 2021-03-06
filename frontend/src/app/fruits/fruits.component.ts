import { Component, OnInit } from '@angular/core';

import { Fruit } from '../fruit';
import { FruitService } from '../fruit.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css'],
  
})
export class FruitsComponent implements OnInit {

  fruits: Fruit[];
  selectedFruit : Fruit;

  constructor(private fruitService: FruitService) {}

  ngOnInit(): void {
    this.getHeroes()
  }

  onSelect(fruit: Fruit){
    this.selectedFruit = fruit;
  }

  getHeroes(): void {
   this.fruitService.getHeroes().subscribe(fruits => this.fruits = fruits);
  }

}
