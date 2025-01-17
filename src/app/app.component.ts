import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, HeaderComponent, ContentComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend-assessment';
  searchQuery: string = '';
  // List of items with additional properties (quantity, low_quantity, points, etc.)
  items = [
    { name: 'Apple', price: 30, quantity: 10, low_quantity: 5, points: 50, display_img_url: 'assets/apple.jpg' },
    { name: 'Banana', price: 10, quantity: 20, low_quantity: 5, points: 30, display_img_url: 'assets/banana.jpg' },
    { name: 'Cherry', price: 20, quantity: 0, low_quantity: 5, points: 40, display_img_url: 'assets/cherry.jpg' },
  ];

  // Track sorting direction
  isAscending = true;

  // Sorting method with type safety
  sortItems(sortBy: keyof typeof this.items[0]): void {
    this.items.sort((a, b) => {
      const valA = a[sortBy] ?? 0;
      const valB = b[sortBy] ?? 0;

      // Ensure values are numbers for arithmetic operations
      return this.isAscending
        ? Number(valA) - Number(valB)
        : Number(valB) - Number(valA);
    });
    this.isAscending = !this.isAscending; // Toggle sort direction
  }
}
