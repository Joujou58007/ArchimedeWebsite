import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-candidacy-page',
  standalone: true,
  imports: [MaterialModule, CommonModule, ReactiveFormsModule],
  templateUrl: './candidacy-page.component.html',
  styleUrl: './candidacy-page.component.scss'
})
export class CandidacyPageComponent {
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      name: [''],
      familyName: [''],
      email: ['', [Validators.required, Validators.email]],
      program: ['', Validators.required],
    });
  }

  programs: string[] = [
    'Informatique',
    'Logiciel',
    'Aérospatial',
    'Mécanique',
    'Électrique',
    'Physique',
    'Biomédical',
    'Chimique',
    'Civil',
    'Mines',
    'Géologique',
    'Industriel'
  ];

  onSubmit(): void {
    if (this.registrationForm.valid) {
      //TODO: handle the submission of the form
      console.log("submitted!")
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.onSubmit();
    }
  }
}
