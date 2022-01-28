import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model.ts';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a simply recipe', 'https://www.browneyedbaker.com/wp-content/uploads/2021/10/meatloaf-14-1200.jpg'),
    new Recipe('A second recipe', "This is a second recipe", "http://teste")
  ];

}
