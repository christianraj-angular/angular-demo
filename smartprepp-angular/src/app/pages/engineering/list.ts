import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-engineering-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list.html',
  styleUrls: ['./list.css']
})
export class EngineeringList {
  files: string[] = [];

  constructor() {
    // Hardcoded list derived from original assets folder (keeps things simple).
    this.files = [
      'index.html', 'amity-university.html','amrita-institutions.html','anna-university.html','bms-college-of-engineering.html','christ-university.html','graphic-era-hill-university.html','hindustan-institute-of-technology-and-science.html','indian-maritime-university.html','jain-university.html','manipal-university-jaipur.html','manipal.html','nmims-university.html','ramaiah-institute-of-technology.html','srm.html','st-josephs-college-bangalore.html','symbiosis-international-university.html','upes-dehradun.html','vit.html'
    ];
  }
}
