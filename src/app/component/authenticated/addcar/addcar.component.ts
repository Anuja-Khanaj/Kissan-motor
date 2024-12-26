import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css'],
})
export class AddcarComponent {
  photoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.photoForm = this.fb.group({
      modelName: ['', Validators.required],
      multiplePhotos: this.fb.array([this.createPhotoField()]), // Initialize with one field
      billPhoto: [null, Validators.required],
      polishPhotos: this.fb.array([this.createPolishPhotoField()]), // Initialize with one field
      sellingPhoto: [null, Validators.required],
      chequeFront: [null, Validators.required],
      chequeBack: [null, Validators.required],
    });
  }

  // Getters for form arrays
  get multiplePhotos(): FormArray {
    return this.photoForm.get('multiplePhotos') as FormArray;
  }

  get polishPhotos(): FormArray {
    return this.photoForm.get('polishPhotos') as FormArray;
  }

  // Create a photo field for multiplePhotos
  createPhotoField(): FormGroup {
    return this.fb.group({
      photo: ['', Validators.required],
    });
  }

  // Create a photo field for polishPhotos
  createPolishPhotoField(): FormGroup {
    return this.fb.group({
      photo: ['', Validators.required],
    });
  }

  // Add photo to multiplePhotos array
  addPhoto(): void {
    if (this.multiplePhotos.length < 4) {
      this.multiplePhotos.push(this.createPhotoField());
    } else {
      alert('You can add a maximum of 4 photos.');
    }
  }

  // Remove photo from multiplePhotos array
  removePhoto(index: number): void {
    this.multiplePhotos.removeAt(index);
  }

  // Add photo to polishPhotos array
  addPolishPhoto(): void {
    if (this.polishPhotos.length < 4) {
      this.polishPhotos.push(this.createPolishPhotoField());
    } else {
      alert('You can add a maximum of 4 photos.');
    }
  }

  // Remove photo from polishPhotos array
  removePolishPhoto(index: number): void {
    this.polishPhotos.removeAt(index);
  }

  // Submit form
  onSubmit(): void {
    console.log(this.photoForm.value);
  }
}
