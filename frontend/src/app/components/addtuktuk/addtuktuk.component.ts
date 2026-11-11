import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TuktukService } from '../../services/tuktuk.service';

@Component({
  selector: 'app-addtuktuk',
  templateUrl: './addtuktuk.component.html',
  styleUrl: './addtuktuk.component.css'
})
export class AddtuktukComponent {
  myForm!: FormGroup;
  wilayaOptions: string[] = ['N.Sud', 'N.Ouest', 'N.Nord'];
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddtuktukComponent>,
  
    private tuktukService:TuktukService,
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
      nserie: new FormControl('', [Validators.required]),
      wilaya: new FormControl('', [Validators.required]),
      logo:new FormControl(false),
    });
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  addTuktuk(){
      if (this.myForm.valid) {
        this.dialogRef.close(this.myForm.value);
        console.log(this.myForm.value); 
      }
  
      }

}
