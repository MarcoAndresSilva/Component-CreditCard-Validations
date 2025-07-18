import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'; 

import { formatCardNumber, formatExpiryDate } from './utils';
@Component({
  selector: 'app-creditcard-form',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './creditcard-form.component.html',
  styleUrls: ['./creditcard-form.component.scss']
})
export class CreditcardFormComponent implements OnInit {
  
  cardForm!: FormGroup; // el signo de exclamación en cardForm! indica que cardForm es requerido

  constructor(private fb: FormBuilder) { };

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.cardForm = this.fb.group({
      number: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      name: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]],
      month: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])$/)]],
      year: ['', [Validators.required, Validators.pattern(/^\d{4}$/), this.yearValidator]],
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]]
    });
  }

  yearValidator(control: AbstractControl): { [key: string]: any } | null {
    if (!control.value) return null;
    const currentYear = new Date().getFullYear();
    const year = parseInt(control.value);
    if (year < currentYear || year > currentYear + 10) {
      return { invalidYear: true };
    }
    return null;
  }

  get cardNumber() {
    return formatCardNumber(this.cardForm.controls['number'].value);
  }

  get cardExpiryMonth() {
    return formatExpiryDate(this.cardForm.controls['month'].value);
  }

  get cardExpiryYear() {
    return formatExpiryDate(this.cardForm.controls['year'].value);
  }

  get cardHolderName() {
    return this.cardForm.controls['name'].value || 'Card Holder Name';
  }

  get isFormValid() {
    return this.cardForm.valid;
  }

  onSubmit() {
    if (this.cardForm.valid) {
      console.log('Form submitted:', this.cardForm.value);
    }
  }



}
