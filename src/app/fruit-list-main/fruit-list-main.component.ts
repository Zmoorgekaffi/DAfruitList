import { Component, inject } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { SinglefruitComponent } from './singlefruit/singlefruit.component';
import { FruitlistDataService } from '../fruitlist-data.service';


@Component({
  selector: 'app-fruit-list-main',
  standalone: true,
  imports: [
    CommonModule,
    SinglefruitComponent,
  ],
  templateUrl: './fruit-list-main.component.html',
  styleUrl: './fruit-list-main.component.scss'
})
export class FruitListMainComponent {

  fruitlistData = inject(FruitlistDataService);

  addStarClasses(fruitStars: number): {}  {
    return {'fontColorGood': fruitStars > 4, 'fontColorBad': fruitStars < 4, 'bgWhite': fruitStars}
  }

  addComment(comment:string, index:number) {
    this.fruitlistData.addComment(comment, index);
  }
}

