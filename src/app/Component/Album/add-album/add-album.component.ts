import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent {

  albumForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.albumForm = this.fb.group({
      title: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s]+$/)]],
      coverPicture: ['', Validators.minLength(5)],
    });
  }

  get title() {
    return this.albumForm.get('title');
  }

  get coverPicture() {
    return this.albumForm.get('coverPicture');
  }

  onSubmit() {
    if (this.albumForm.valid) {
      console.log('Album ajouté:', this.albumForm.value);
    }
  }

}
