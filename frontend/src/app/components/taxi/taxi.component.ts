import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TaxiService,Taxi } from '../../services/taxi.service';
import { AddtaxiComponent } from '../addtaxi/addtaxi.component';
import { EditaxiComponent } from '../editaxi/editaxi.component';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-taxi',
  templateUrl: './taxi.component.html',
  styleUrl: './taxi.component.css'
})
export class TaxiComponent implements OnInit , AfterViewInit{
  taxis:Taxi[] = [];  // To store the fetched cartes
  dataSource = new MatTableDataSource<Taxi>();
  myForm!: FormGroup;
  displayedColumns: string[] = ['nom', 'telephone', 'matricule','federation','garage','nserie','wilaya','actions'];
   // Reference for the paginator
   @ViewChild(MatPaginator) paginator!: MatPaginator;
   @ViewChild(MatSort) sort!: MatSort;
   constructor(public dialog: MatDialog,private taxiService:TaxiService, private cdr: ChangeDetectorRef) {}
 
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
     this.taxiService.getTaxis().subscribe((data) => {
      this.taxis = data;
      console.log(this.taxis); 
      // Set the data to the dataSource
      this.dataSource.data = this.taxis;  
       // Set the paginator after data is loaded
       if (this.paginator) {
        this.dataSource.paginator = this.paginator;
       }   
    });
  }
     addTaxi():void{
       const dialogRef = this.dialog.open(AddtaxiComponent, {
        width: '400px',  // You can adjust the size of the dialog here       
        height: '400px',
       });      
        // After the dialog is closed, check if we got a carte, then add it via the service
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.taxiService.addTaxi(result).subscribe(taxi => {
          this.taxis.push(taxi);  // Add the new carte to the list
          this.dataSource.data = [...this.taxis]; // Update the dataSource
        });
      }
    });
  }
     deleteTaxi(index: number) {
       const confirmed = confirm("Etes-vous sur ?");
       if (confirmed) { 
         console.log(`Deleting user with id: ${index}`);       
           this.taxiService.deleteTaxi(index).subscribe(() => {
             // After deletion, filter the dataSource to remove the deleted user
             this.taxis = this.taxis.filter(taxi => taxi.id !== index);
             this.dataSource.data = [...this.taxis]; // Update the dataSource
           });
        }
     }
  
     openEditDialog(taxi: any): void {
      console.log("Taxi data in dialog:", taxi);
       const dialogRef = this.dialog.open(EditaxiComponent, {
         width: '400px',  // You can adjust the size of the dialog here       
         height: '400px',
        data: taxi  // Pass the carte data to the dialog
       
        
       });
      
  
       // Handle the result when the dialog is closed
       dialogRef.afterClosed().subscribe(result => {
         if (result) {
           // Update the user with the result from the dialog
           const index = this.taxis.findIndex(u => u.id === result.id);
           console.log(index);
            Object.assign( taxi, result);
           // console.log( taxi, result); // Update the original item with the returned data
            if (index > -1) {
              Object.assign(this.taxis[index], result); // Update the item
              this.taxiService.updateTaxi(result.id, this.taxis[index]).subscribe(() => {
                this.dataSource.data = [...this.taxis]; // Update the dataSource
              });
            }
            // this.carteService.updateCarte(carte.id,carte).subscribe(carte => {
            //   this.cartes[index] = result;  // update the carte to the list
            //   this.cartes = [...this.cartes]; // Update the table
            // });
            

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
    
  }}
  exportToPDF():void{
    const doc = new jsPDF();
    doc.text('', 14, 16);
    (doc as any).autoTable({
      head: [['nom', 'telephone', 'matricule','federation','garage','nserie','wilaya']], // Example headers, adjust based on your table structure
      body: this.dataSource.filteredData.map(taxi => [ taxi.nom, taxi.telephone, taxi.matricule,taxi.federation,taxi.garage,taxi.nserie,taxi.wilaya]) // Use filtered data
    });
    doc.save('filtered_table_data.pdf');

  }

}
