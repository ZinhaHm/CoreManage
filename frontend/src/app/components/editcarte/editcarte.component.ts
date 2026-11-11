import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editcarte',
  templateUrl: './editcarte.component.html',
  styleUrl: './editcarte.component.css'
})
export class EditcarteComponent {
  @Input() editedCarte: any = {};
 
  constructor(
    public dialogRef: MatDialogRef<EditcarteComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,

    ) 
    
    {
      // Initialize the editedCarte with the data passed in
      this.editedCarte = { ...data };

    }
    // Close the dialog and send the updated data back to the parent component
    saveCarte() {
      this.dialogRef.close(this.editedCarte);
      console.log( "editedTaxi" ,this.editedCarte);
    }
  
    // Cancel and close the dialog without saving
    cancelEdit(): void {
      this.dialogRef.close();
    }
}
