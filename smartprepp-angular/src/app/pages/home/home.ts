import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  modalOpen = false;
  submitted = false;

  openModal() { this.modalOpen = true; this.submitted = false; }
  closeModal() { this.modalOpen = false; }

  submit(form: any) {
    this.submitted = true;
    // In real app: send to API. We'll just show success message.
  }
}
