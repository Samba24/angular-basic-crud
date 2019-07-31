import { Component } from '@angular/core';
import Random from './classes/Random';
import { RandomService } from './services/random.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randoms : Array<Random>

  constructor(private randomService : RandomService){}

  addRandom(){
    let description = prompt('Enter random description');
    let random = new Random(description);
    this.randomService.add(random).then((result : any)=>{
      if(result.state){
        random.setId = result.state;
        this.randoms.push(random)
      }else{
        alert('Unable to create random')
      }
    })
    
  }

  ngOnInit(): void {
    this.getRandoms();
  }

  getRandoms(){
    this.randomService.getAll().subscribe((data : any) => {
      this.randoms = data
    })
  }
}
