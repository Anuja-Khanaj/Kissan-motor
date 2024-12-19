import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent {
  photoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.photoForm = this.fb.group({
      modelName: ['', Validators.required],
      multiplePhotos: [null, Validators.required],
      billPhoto: [null, Validators.required],
      polishPhotos: [null, Validators.required],
      sellingPhoto: [null, Validators.required],
      chequeFront: [null, Validators.required],
      chequeBack: [null, Validators.required],
    });

}
onSubmit(){
  console.log("submitted");
  
}
}
