import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { GarageService } from '../../services/garage.service';

@Component({
  selector: 'app-addgarage',
  templateUrl: './addgarage.component.html',
  styleUrl: './addgarage.component.css'
})
export class AddgarageComponent {

  myForm!: FormGroup;
  wilayaOptions: string[] = ['N.Sud', 'N.Ouest', 'N.Nord'];  
  fedOptions:string[]=['FNT','FGTN','FGT','FAST','GTU','FBT'];
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddgarageComponent>,
  
    private garageService:GarageService,
  ){}
  ngOnInit(): void {
    this.initForm()
  }
  initForm(): void
  {
    // Create the form
    this.myForm = this.fb.group({
      nomg: new FormControl('', [Validators.required]),
      ligne: new FormControl('', [Validators.required]),
      code: new FormControl('', [Validators.required]),
      nvoitures: new FormControl('', [Validators.required]),
      federation: new FormControl('', [Validators.required]),
      wilaya: new FormControl('', [Validators.required]),
      moughata: new FormControl('', [Validators.required]),
      commune: new FormControl('', [Validators.required]),
      nomr: new FormControl('', [Validators.required]),
      nnir: new FormControl('', [Validators.required]),
      telephoner: new FormControl('', [Validators.required]),
    
    });
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  addGarage(){
      if (this.myForm.valid) {
        this.dialogRef.close(this.myForm.value);
        console.log(this.myForm.value); 
      }
  
      }

}
