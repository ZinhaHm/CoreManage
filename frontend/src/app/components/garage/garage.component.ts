import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Garage, GarageService } from '../../services/garage.service';
import { AddgarageComponent } from '../addgarage/addgarage.component';
import { EditgarageComponent } from '../editgarage/editgarage.component';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrl: './garage.component.css'
})
export class GarageComponent implements OnInit , AfterViewInit{
  garages:Garage[] = [];  // To store the fetched cartes
  dataSource = new MatTableDataSource<Garage>();
  myForm!: FormGroup;
  displayedColumns: string[] = ['nomg','ligne','code','nvoitures','federation','wilaya','moughata','commune','nomr', 'nnir','telephoner','actions'];
   // Reference for the paginator
   @ViewChild(MatPaginator) paginator!: MatPaginator;
   @ViewChild(MatSort) sort!: MatSort;
   constructor(public dialog: MatDialog,private garageService:GarageService, private cdr: ChangeDetectorRef) {}
 
  ngOnInit(): void{
    this.initForm()
      
  }
     // Assign the paginator after the view is fully initialized
     ngAfterViewInit(): void {
      
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.cdr.detectChanges();  // Trigger change detection manually if needed
    
    }
    initForm() {
      // Fetch the initial list of cartes
      this.garageService.getGarage().subscribe((data) => {
       this.garages = data;
       // Set the data to the dataSource
       this.dataSource.data = this.garages;  
        // Set the paginator after data is loaded
        if (this.paginator) {
         this.dataSource.paginator = this.paginator;
        }   
     });
   }
   
   addGarage():void{
    const dialogRef = this.dialog.open(AddgarageComponent, {
     width: '400px',  // You can adjust the size of the dialog here       
     height: '400px',
    });      
     // After the dialog is closed, check if we got a carte, then add it via the service
 dialogRef.afterClosed().subscribe(result => {
   if (result) {
     this.garageService.addGarage(result).subscribe(garage => {
       this.garages.push(garage);  // Add the new carte to the list
       this.dataSource.data = [...this.garages]; // Update the dataSource
     });
   }
 });
}

deleteGarage(index: number) {
  const confirmed = confirm("Etes-vous sur ?");
  if (confirmed) { 
    console.log(`Deleting user with id: ${index}`);       
      this.garageService.deleteGarage(index).subscribe(() => {
        // After deletion, filter the dataSource to remove the deleted user
        this.garages = this.garages.filter(garage => garage.id !== index);
        this.dataSource.data = [...this.garages]; // Update the dataSource
      });
   }
}

openEditDialog(garage: any): void {
  const dialogRef = this.dialog.open(EditgarageComponent, {
    width: '400px',  // You can adjust the size of the dialog here       
    height: '400px',
   data: garage   // Pass the carte data to the dialog
   
  });

  // Handle the result when the dialog is closed
  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // Update the user with the result from the dialog
      const index = this.garages.findIndex(u => u.id === result.id);
       Object.assign( garage, result); // Update the original item with the returned data
       if (index > -1) {
         Object.assign(this.garages[index], result); // Update the item
         this.garageService.updateGarage(result.id, this.garages[index]).subscribe(() => {
           this.dataSource.data = [...this.garages]; // Update the dataSource
         });
       }      

      }
    }
  );
}
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
    head: [[ 'Garage','ligne','code','nvoitures','federation','wilaya','moughata','commune','nomr', 'nnir','telephoner']], // Example headers, adjust based on your table structure
    body: this.dataSource.filteredData.map(garage => [garage.nomg,garage.ligne, garage.code,garage.nvoitures,garage.federation,garage.wilaya,garage.moughata,garage.commune,garage.nomr, garage.nnir,garage.telephoner]) // Use filtered data
  });
  doc.save('filtered_table_data.pdf');

}

}
