import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TaxiService } from '../../services/taxi.service';

@Component({
  selector: 'app-addtaxi',
  templateUrl: './addtaxi.component.html',
  styleUrl: './addtaxi.component.css'
})
export class AddtaxiComponent {
  myForm!: FormGroup;
  
  wilayaOptions: string[] = ['N.Sud', 'N.Ouest', 'N.Nord'];
  fedOptions:string[]=['FNT','FGTN','FGT','FAST','GTU','FBT','ND'];
   
 constructor(
   private fb: FormBuilder,
   public dialogRef: MatDialogRef<AddtaxiComponent>,
   private taxiService:TaxiService,
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
     federation: new FormControl('', [Validators.required]),
     garage: new FormControl('', [Validators.required]),
     nserie: new FormControl('', [Validators.required]),
     wilaya: new FormControl('', [Validators.required]),
 
   });
 }
 closeDialog(): void {
   this.dialogRef.close();
 }
 addTaxi(){
     if (this.myForm.valid) {
       this.dialogRef.close(this.myForm.value);
       console.log(this.myForm.value); 
     }
 
     }
}
