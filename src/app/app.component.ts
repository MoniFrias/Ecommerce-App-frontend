import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecommerce App';

  constructor(private router: Router){}

  listarProducts(category: string){
    this.router.navigate(['categories1', category]);
  }

  listarProducts2(category: string){
    this.router.navigate(['categories2', category]);
  }

  listarProducts3(category: string){
    this.router.navigate(['categories3', category]);
  }
}
