import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edituktuk',
  templateUrl: './edituktuk.component.html',
  styleUrl: './edituktuk.component.css'
})
export class EdituktukComponent {
  @Input() editedTuktuk: any = {};
  wilayaOptions: string[] = ['N.Sud', 'N.Ouest', 'N.Nord'];
  constructor(public dialogRef: MatDialogRef<EdituktukComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,)
     
    {
      // Initialize the editedCarte with the data passed in
      this.editedTuktuk = { ...data };

    }
    // Close the dialog and send the updated data back to the parent component
    saveTuktuk() {
      this.dialogRef.close(this.editedTuktuk);
    }
  
    // Cancel and close the dialog without saving
    cancelEdit(): void {
      this.dialogRef.close();
    }
}
