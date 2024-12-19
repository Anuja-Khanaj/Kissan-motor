import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponse } from 'src/app/module/AuthResponse';
import { AuthenticationService } from 'src/app/servies/authentication.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  // Form group declaration
  reactiveforms: FormGroup;

  // Injected services
  authService: AuthenticationService = inject(AuthenticationService);
  router: Router = inject(Router);

  authObs: Observable<AuthResponse>;

  constructor(private afAuth: AuthenticationService) {}

  ngOnInit() {
    // Initialize the form group
    this.reactiveforms = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    });
  }

  OnformSubmitted() {
    // Destructure form values correctly
    const { email, password } = this.reactiveforms.value;

    // Call login method
    this.authObs = this.authService.login(email, password);

    this.authObs.subscribe({
      next: (res) => {
        console.log("Login successful");
        
        this.router.navigate(["/home"]);
      },
      error: (errMsg) => {
        console.error("Login failed:", errMsg);
      }
    });

    // Reset the form
    this.reactiveforms.reset();
  }
}
