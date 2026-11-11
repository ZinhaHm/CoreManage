import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editgarage',
  templateUrl: './editgarage.component.html',
  styleUrl: './editgarage.component.css'
})
export class EditgarageComponent {

  @Input() editedGarage: any = {};
  
  wilayaOptions: string[] = ['N.Sud', 'N.Ouest', 'N.Nord'];
  fedOptions:string[]=['FNT','FGTN','FGT','FAST','GTU','FBT'];
  constructor(
    public dialogRef: MatDialogRef<EditgarageComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,

    ) 
    
    {
      // Initialize the editedCarte with the data passed in
      this.editedGarage = { ...data };

    }
    // Close the dialog and send the updated data back to the parent component
    saveGarage() {
      this.dialogRef.close(this.editedGarage);
    }
  
    // Cancel and close the dialog without saving
    cancelEdit(): void {
      this.dialogRef.close();
    }
}
