import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html', // Vérifiez que le chemin est correct
  styleUrls: ['./signup.component.scss'],
})

export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  isExpert: boolean = false;

  constructor(private fb: FormBuilder,private authservice: AuthService,private router :Router) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['USER', Validators.required],
      domain: [''],
      location: [''],
      availability: [''],
      price: [null],
    });
  }

  ngOnInit(): void {}

  // Lorsque le rôle change, on met à jour la visibilité des champs experts
    onRoleChange(): void {
      const role = this.signupForm.get('role')?.value;
      this.isExpert = role === 'EXPERT';
      console.log(this.isExpert); // Ajoutez ceci pour vérifier si la valeur se met à jour
    
    

    if (this.isExpert) {
      this.signupForm.get('domain')?.setValidators(Validators.required);
      this.signupForm.get('location')?.setValidators(Validators.required);
      this.signupForm.get('availability')?.setValidators(Validators.required);
      this.signupForm.get('price')?.setValidators(Validators.required);
    } else {
      this.signupForm.get('domain')?.clearValidators();
      this.signupForm.get('location')?.clearValidators();
      this.signupForm.get('availability')?.clearValidators();
      this.signupForm.get('price')?.clearValidators();
    }

    this.signupForm.get('domain')?.updateValueAndValidity();
    this.signupForm.get('location')?.updateValueAndValidity();
    this.signupForm.get('availability')?.updateValueAndValidity();
    this.signupForm.get('price')?.updateValueAndValidity();
  }

  // Soumettre le formulaire
  onSubmit(): void {
    if (this.signupForm.valid) {
      this.authservice.register(this.signupForm.value).subscribe(
        (response) => {
          console.log('User registered successfully:', response);
    
          alert('Registration successful');
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Registration failed:', error);
          alert('Registration failed');
        }
      );
    } else {
      alert('Please fill out the form correctly');
    }
  }
}
