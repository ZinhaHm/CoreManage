import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CarteService,Carte } from '../../services/carte.service';

@Component({
  selector: 'app-addcarte',
  templateUrl: './addcarte.component.html',
  styleUrl: './addcarte.component.css'
})
export class AddcarteComponent {
  myForm!: FormGroup;
 // cartes: Carte[] = [];
  
constructor(
  private fb: FormBuilder,
  public dialogRef: MatDialogRef<AddcarteComponent>,
  private carteService:CarteService,
){}
ngOnInit(): void {
  this.initForm()
}
initForm(): void
{
  // Create the form
  this.myForm = this.fb.group({
    nom: new FormControl('', [Validators.required]),
    telephone: new FormControl('', [Validators.required]),
    matricule: new FormControl('', [Validators.required]),

  });
}
closeDialog(): void {
  this.dialogRef.close();
}
addCarte(){
    if (this.myForm.valid) {
      this.dialogRef.close(this.myForm.value);
      console.log(this.myForm.value); 
    }

    }
  }

