import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editaxi',
  templateUrl: './editaxi.component.html',
  styleUrl: './editaxi.component.css'
})
export class EditaxiComponent {
  @Input() editedTaxi: any = {};
  
  wilayaOptions: string[] = ['N.Sud', 'N.Ouest', 'N.Nord'];
  fedOptions:string[]=['FNT','FGTN','FGT','FAST','GTU','FBT','ND'];
  constructor(
    public dialogRef: MatDialogRef<EditaxiComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,

    ) 
    
    {
      // Initialize the editedCarte with the data passed in
      this.editedTaxi = { ...data };
    //  console.log("Taxi data in dialog:", data);
    }
    // Close the dialog and send the updated data back to the parent component
    saveTaxi() {
            this.dialogRef.close(this.editedTaxi);
            console.log( "editedTaxi" ,this.editedTaxi); 
    }
  
    // Cancel and close the dialog without saving
    cancelEdit(): void {
      this.dialogRef.close();
    }
}
