import { Component, OnInit } from '@angular/core';
import { Skill, Category, Image} from './interface';
import { Skills, Categories} from './initialize';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

   skills: Skill[] = Skills;
    categories: Category[] = Categories;



  constructor() {
    console.log(this.categories);

    
  }

  ngOnInit(): void {
  }

}
