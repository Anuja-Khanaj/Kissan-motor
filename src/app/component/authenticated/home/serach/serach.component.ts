import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.css']
})
export class SerachComponent {
 route:Router = inject(Router);

 show(){
  this.route.navigateByUrl("/showcar")
 }
}
