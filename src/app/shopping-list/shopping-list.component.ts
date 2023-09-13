import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredients.models';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 5),
    new Ingredient('Onions', 3),
    new Ingredient('Bell Peppers', 2),
    new Ingredient('Garlic Cloves', 10),
    new Ingredient('Cilantro', 1),
  ];

}
