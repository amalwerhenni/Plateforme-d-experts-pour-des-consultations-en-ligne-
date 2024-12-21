import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prof-exp',
  templateUrl: './prof-exp.component.html',
  styleUrls: ['./prof-exp.component.scss']
})
export class ProfExpComponent implements OnInit {
  profileForm: FormGroup;
  user: any;
  imageUrl: string | ArrayBuffer | null = null;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute
  ) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      domain: ['', Validators.required],
      location: ['', Validators.required],
      availability: ['', Validators.required],
      price: ['', Validators.required],
      profileImage: [null]
    });
  }

  ngOnInit(): void {
    // Récupérer l'ID de l'utilisateur depuis localStorage
    const userId = JSON.parse(localStorage.getItem('user') || '{}').id;
    
    if (userId) {
      // Récupérer les données du profil utilisateur depuis le backend
      this.userService.getUserProfile(userId).subscribe(
        (data) => {
          this.user = data;
          this.profileForm.patchValue(data); // Remplir le formulaire avec les données de l'expert
        },
        (error) => {
          console.error('Error fetching profile:', error);
        }
      );
    } else {
      console.log('User not logged in.');
    }
  }

  // Fonction pour la mise à jour du profil
  onSubmit(): void {
    if (this.profileForm.valid) {
      const updatedUser = this.profileForm.value;

      if (this.imageUrl) {
        updatedUser.profileImage = this.imageUrl; // Ajouter l'image si elle existe
      }

      this.userService.updateUserProfile(this.user.id, updatedUser).subscribe(
        (response) => {
          console.log('Profile updated successfully:', response);
        },
        (error) => {
          console.error('Error updating profile:', error);
        }
      );
    }
  }

  // Fonction pour gérer l'upload de l'image
  onImageChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
