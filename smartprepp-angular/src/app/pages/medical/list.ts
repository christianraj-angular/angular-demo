import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-medical-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list.html',
  styleUrls: ['./list.css']
})
export class MedicalList {
  files: string[] = [];

  constructor() {
    this.files = ['index.html', 'bharati-vidyapeeth.html','dy-patil.html','krishna-institute.html','mgm-aurangabad.html','mgm-indore.html','mgm-pondicherry.html','rajarajeshwari.html','rural-loni.html','santosh.html','smcw.html'];
  }
}
