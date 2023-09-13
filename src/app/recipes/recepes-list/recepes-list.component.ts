import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recepes-list',
  templateUrl: './recepes-list.component.html',
  styleUrls: ['./recepes-list.component.css']
})
export class RecepesListComponent {
  recipeList: Recipe[] = [
    new Recipe("Spaghetti Carbonara", "A classic Italian pasta dish.", "/assets/images/spaghetti.jpeg"),
    new Recipe("Chicken Stir-Fry", "A delicious stir-fry with chicken and vegetables.", "/assets/images/chicken-stir-fry.jpg"),
    new Recipe("Homemade Pizza", "Make your own pizza with your favorite toppings.", "/assets/images/pizza.jpeg"),
    new Recipe("Chocolate Cake", "Indulge in a rich and moist chocolate cake.", "/assets/images/chocolate-cake.jpeg"),
    new Recipe("Greek Salad", "Enjoy a refreshing Greek salad with feta and olives.", "/assets/images/greek-salad.jpeg"),
    new Recipe("Vegetable Curry", "A flavorful vegetable curry with aromatic spices.", "/assets/images/vegetable-curry.jpeg"),
    new Recipe("Grilled Salmon", "Grill salmon fillets to perfection for a healthy meal.", "/assets/images/salmon.jpeg"),
    new Recipe("Mango Smoothie", "Blend fresh mangoes into a delicious smoothie.", "/assets/images/mango-smoothie.jpeg"),
    new Recipe("Caprese Salad", "Tomato, mozzarella, and basil make a delightful salad.", "/assets/images/caprese-salad.jpeg"),
    new Recipe("Pancakes", "Start your day with fluffy pancakes and syrup.", "/assets/images/pancakes.jpeg")
  ];
}
