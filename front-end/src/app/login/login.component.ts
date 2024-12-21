import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authservice: AuthService,
    private userservice:UserService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  

  onLogin() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
  
      this.authservice.login(credentials).subscribe({
        next: (user) => {
          // Stockage des informations de l'utilisateur dans localStorage
          localStorage.setItem('user', JSON.stringify(user));  // Stockage de l'utilisateur dans localStorage
  
          // Redirection en fonction du rôle
          if (user.role === 'EXPERT') {
            this.router.navigate(['nav/expdash']);
          } else if (user.role === 'USER') {
            this.router.navigate(['nav/usdash']);
          }
        },
        error: (err) => {
          console.error('Login failed:', err);
          this.errorMessage = 'Invalid email or password. Please try again.';
        }
      });
    }
  }
  
  logout(): void {
    localStorage.clear(); // Supprimez les données utilisateur
    this.router.navigate(['/login']); // Redirigez vers la page de connexion
  }
}
