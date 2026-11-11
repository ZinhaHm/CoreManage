import { Component, OnInit, ViewChild , AfterViewInit, ChangeDetectorRef} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddcarteComponent } from '../addcarte/addcarte.component';
import { EditcarteComponent } from '../editcarte/editcarte.component';
import { CarteService,Carte } from '../../services/carte.service';
import { FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrl: './carte.component.css'
})
export class CarteComponent implements OnInit , AfterViewInit{
  cartes:Carte[] = [];  // To store the fetched cartes
  dataSource = new MatTableDataSource<Carte>();
  myForm!: FormGroup;
  displayedColumns: string[] = ['nom', 'telephone', 'matricule','actions'];
   // Reference for the paginator
   @ViewChild(MatPaginator) paginator!: MatPaginator;
   @ViewChild(MatSort) sort!: MatSort;
 constructor(public dialog: MatDialog,private carteService:CarteService, private cdr: ChangeDetectorRef) {}
 
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
     this.carteService.getCartes().subscribe((data) => {
      this.cartes = data;
      console.log(this.cartes); 
      // Set the data to the dataSource
      this.dataSource.data = this.cartes;  
       // Set the paginator after data is loaded
       if (this.paginator) {
        this.dataSource.paginator = this.paginator;
       }   
    });
  }
     addCarte():void{
       const dialogRef = this.dialog.open(AddcarteComponent, {
        width: '400px',  // You can adjust the size of the dialog here       
        height: '400px',
       });      
        // After the dialog is closed, check if we got a carte, then add it via the service
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.carteService.addCarte(result).subscribe(carte => {
          this.cartes.push(carte);  // Add the new carte to the list
         // this.cartes = [...this.cartes]; // Update the table
          this.dataSource.data = [...this.cartes]; // Update the dataSource
        });
      }
    });
  }
    deleteCarte(index: number) {
      const confirmed = confirm("Etes-vous sur ?");
      if (confirmed) { 
        console.log(`Deleting user with id: ${index}`);       
          this.carteService.deleteCarte(index).subscribe(() => {
            // After deletion, filter the dataSource to remove the deleted user
            this.cartes = this.cartes.filter(carte => carte.id !== index);
            this.dataSource.data = [...this.cartes]; // Update the dataSource
          });
       }
    }
     openEditDialog(carte: any): void {
       const dialogRef = this.dialog.open(EditcarteComponent, {
         width: '400px',  // You can adjust the size of the dialog here       
         height: '400px',
        data: carte   // Pass the carte data to the dialog
        
       });
  
       // Handle the result when the dialog is closed
       dialogRef.afterClosed().subscribe(result => {
         if (result) {
           // Update the user with the result from the dialog
           const index = this.cartes.findIndex(u => u.id === result.id);
            Object.assign( carte, result); // Update the original item with the returned data
            if (index > -1) {
              Object.assign(this.cartes[index], result); // Update the item
              this.carteService.updateCarte(result.id, this.cartes[index]).subscribe(() => {
                this.dataSource.data = [...this.cartes]; // Update the dataSource
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
    
  }}
  exportToPDF():void{
    const doc = new jsPDF();
    doc.text('', 14, 16);
    (doc as any).autoTable({
      head: [['Nom', 'Téléphone', 'Matricule']], // Example headers, adjust based on your table structure
      body: this.dataSource.filteredData.map(carte => [carte.nom, carte.telephone, carte.matricule]) // Use filtered data
    });
    doc.save('filtered_table_data.pdf');

  }
  
}