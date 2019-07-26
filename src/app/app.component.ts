import { Component } from '@angular/core';
import Random from './classes/Random';
import { RandomService } from './services/random.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-basic-crud';
  randoms = [
    {
      id : 1,
      description : 'This is a random'
    }
  ]

  constructor(private randomService : RandomService){}

  addRandom(){
    let description = prompt('Enter random description');
    let random = new Random(description);
    this.randomService.add(random).then((result)=>{
      if(result){
  
      }
    })
    
  }
  ngOnInit(): void {
  }
}
