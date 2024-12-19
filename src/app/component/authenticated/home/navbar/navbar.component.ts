import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 route:Router = inject(Router);
  onLogout(){

  }

  ngOnInit(): void {
    this.ngOnInit
  }
}
