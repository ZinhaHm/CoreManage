import { Component, OnInit, ViewChild , AfterViewInit, ChangeDetectorRef} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { TuktukService,Tuktuk } from '../../services/tuktuk.service';
import { EdituktukComponent } from '../edituktuk/edituktuk.component';
import { AddtuktukComponent } from '../addtuktuk/addtuktuk.component';
@Component({
  selector: 'app-tuktuk',
  templateUrl: './tuktuk.component.html',
  styleUrl: './tuktuk.component.css'
})
export class TuktukComponent implements OnInit , AfterViewInit{
  tuktuks:Tuktuk[] = [];  // To store the fetched cartes
  dataSource = new MatTableDataSource<Tuktuk>();
  myForm!: FormGroup;
  displayedColumns: string[] = [ 'nom', 'telephone', 'matricule','nserie','wilaya','logo','actions'];
   // Reference for the paginator
   @ViewChild(MatPaginator) paginator!: MatPaginator;
   @ViewChild(MatSort) sort!: MatSort;
 constructor(public dialog: MatDialog,private tuktukService:TuktukService, private cdr: ChangeDetectorRef) {}
 
  ngOnInit(): void{
    this.initForm()
      
  }
     // Assign the paginator after the view is fully initialized
     ngAfterViewInit(): void {
      
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.cdr.detectChanges();  // Trigger change detection manually if needed
    
    }
  
   // Assign the paginator after the view is fully initialized
  
  initForm() {
     // Fetch the initial list of cartes
     this.tuktukService.getTuktuks().subscribe((data) => {
      this.tuktuks = data;
      // Set the data to the dataSource
      this.dataSource.data = this.tuktuks;  
       // Set the paginator after data is loaded
       if (this.paginator) {
        this.dataSource.paginator = this.paginator;
       }   
    });
  }
     addTuktuk():void{
        const dialogRef = this.dialog.open(AddtuktukComponent, {
         width: '400px',  // You can adjust the size of the dialog here       
         height: '500px',
        });      
         // After the dialog is closed, check if we got a carte, then add it via the service
     dialogRef.afterClosed().subscribe(result => {
       if (result) {
         this.tuktukService.addTuktuk(result).subscribe(tuktuk => {
           this.tuktuks.push(tuktuk);  // Add the new carte to the list
          // this.cartes = [...this.cartes]; // Update the table
           this.dataSource.data = [...this.tuktuks]; // Update the dataSource
         });
       }
     });
 }
    deleteTuktuk(index: number) {
      const confirmed = confirm("Etes-vous sur ?");
      if (confirmed) { 
        console.log(`Deleting user with id: ${index}`);       
          this.tuktukService.deleteTuktuk(index).subscribe(() => {
            // After deletion, filter the dataSource to remove the deleted user
            this.tuktuks = this.tuktuks.filter(tuktuk => tuktuk.id !== index);
            this.dataSource.data = [...this.tuktuks]; // Update the dataSource
          });
       }
    }
    //implement editTuk
     openEditDialog(tuktuk: any): void {
        const dialogRef = this.dialog.open(EdituktukComponent, {
          width: '400px',  // You can adjust the size of the dialog here       
          height: '500px',
          //panelClass: 'custom-dialog-container' ,// Apply custom CSS class
         data: tuktuk   // Pass the carte data to the dialog
        
        });
  
        // Handle the result when the dialog is closed
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            // Update the user with the result from the dialog
            const index = this.tuktuks.findIndex(u => u.id === result.id);
             Object.assign( tuktuk, result); // Update the original item with the returned data
             if (index > -1) {
               Object.assign(this.tuktuks[index], result); // Update the item
               this.tuktukService.updateTuktuk(result.id, this.tuktuks[index]).subscribe(() => {
                 this.dataSource.data = [...this.tuktuks]; // Update the dataSource
               });
             }
            

            }
          }
        );
      }

     // Function to filter data based on search input
  applyFilter(event:Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue === '') {
      // If the search input is empty, reset the filtered data to the original data
      this.initForm()
     // this.filteredDataSource = [...this.dataSource];
    } else {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
     // this.dataSource.filter = filterValue;
    // Apply the filter logic using filterValue
    // const lowerCaseFilterValue = filterValue.toLowerCase();
    // this.cartes = this.cartes.filter(item =>
    //   item.nom.toLowerCase().includes(lowerCaseFilterValue)  ||
    //    item.telephone.toString().includes(lowerCaseFilterValue) ||
    //   item.matricule.toString().includes(lowerCaseFilterValue)
    // );
  }}
  exportToPDF():void{
    const doc = new jsPDF();
    doc.text('', 14, 16);
    (doc as any).autoTable({
      head: [['nom', 'telephone', 'matricule','nserie','wilaya','logo']], // Example headers, adjust based on your table structure
      body: this.dataSource.filteredData.map(tuktuk => [tuktuk.nom,tuktuk.telephone,tuktuk.matricule,tuktuk.nserie,tuktuk.wilaya,tuktuk.logo? 'Oui' : 'Non']) // Use filtered data
    });
    doc.save('filtered_table_data.pdf');

  }

}
