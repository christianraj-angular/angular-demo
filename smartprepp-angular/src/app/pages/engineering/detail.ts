import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-engineering-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.html',
  styleUrls: ['./detail.css']
})
export class EngineeringDetail {
  html = '';
  file = '';

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(async (params) => {
      const f = params.get('file');
      if (f) {
        this.file = f;
        try {
          const resp = await fetch(`/assets/original/engineering/${f}`);
          this.html = await resp.text();
        } catch (e) {
          this.html = '<p>Unable to load page.</p>';
        }
      }
    });
  }
}
