import { Component } from '@angular/core';
import { Taxi, TaxiService } from '../services/taxi.service';
import { Tuktuk, TuktukService } from '../services/tuktuk.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  displayedColumns: string[] = ['wilaya','enregistres'];
  displayedColumns1: string[] = ['wilaya','enregistres','logos'];
  dataSource = [
    { wilaya: 'N.Sud', enregistres: 0 },    // Initialize with a default value, e.g., 0
    { wilaya: 'N.Ouest', enregistres: 0 },
    { wilaya: 'N.Nord', enregistres: 0 }
  ];
  dataSource1 = [
    { wilaya: 'N.Sud', enregistres: 0 ,logos:0},    // Initialize with a default value, e.g., 0
    { wilaya: 'N.Ouest', enregistres: 0 ,logos:0},
    { wilaya: 'N.Nord', enregistres: 0,logos:0 }
  ];

  constructor(private taxiService: TaxiService, private tuktukService: TuktukService) {}
  ngOnInit() {
    this.loadTaxis();
    this.loadTuktuks();
  }

  loadTaxis() {
    this.taxiService.getTaxis().subscribe((taxis: Taxi[]) => {
      this.dataSource.forEach((entry, index) => {
        // Update enregistres based on taxis data
        entry.enregistres = taxis.filter(taxi => taxi.wilaya === entry.wilaya).length;
      });
    });
  }
  loadTuktuks() {
    this.tuktukService.getTuktuks().subscribe((tuktuks: Tuktuk[]) => {
      this.dataSource1.forEach((entry, index) => {
        entry.enregistres = tuktuks.filter(tuktuk => tuktuk.wilaya === entry.wilaya).length;
        entry.logos = tuktuks.filter(tuktuk => tuktuk.wilaya === entry.wilaya && tuktuk.logo=== true).length;
    
      });
    });
  }
  exportToPDF(): void {
    const doc = new jsPDF();
  
    // First Table: Statistiques des taxis
    doc.text('Statistiques des taxis :', 14, 16);
    (doc as any).autoTable({
      head: [['Wilaya', 'Enregistrés']], // First table headers
      body: this.dataSource.map(data => [data.wilaya, data.enregistres]), // First table data
      startY: 20 // Position the first table
    });
  
    // Space between the tables
    const secondTableStartY = (doc as any).lastAutoTable.finalY + 10;
  
    // Second Table: Statistiques des tuktuks
    doc.text('Statistiques des tuktuks :', 14, secondTableStartY);
    (doc as any).autoTable({
      head: [['Wilaya', 'Enregistrés', 'Logos']], // Second table headers
      body: this.dataSource1.map(data => [
        data.wilaya,
        data.enregistres,
        data.logos // Display checkbox-like values for logos (boolean)
      ]), // Second table data
      startY: secondTableStartY + 6 // Adjust for the second table to be under its title
    });
  
    // Save the PDF
    doc.save('filtered_table_data.pdf');
  }
  
}
