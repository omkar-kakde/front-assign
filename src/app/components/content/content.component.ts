import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {

  items = [
    {
      pk: 987,
      name: 'Reward Name 1',
      points: 150,
      display_img_url: '',  // Empty image URL (testing placeholder)
      quantity: 14,
      valid_until: '2024-12-31T00:00:00',
      low_quantity: 10,
    },
    {
      pk: 988,
      name: 'Reward Name 2',
      points: 200,
      display_img_url: '../assets/stock-vector-angular-emblem-white-letter-on-red-background-1527054845.jpg',
      quantity: 0,
      valid_until: '2024-12-31T00:00:00',
      low_quantity: 5,
    },
    {
      pk: 989,
      name: 'Reward Name 3',
      points: 300,
      display_img_url: '../assets/240_F_389927378_WWJZ8CXPykWjoROz7pwlVBgSqIAAofrA.jpg',
      quantity: 5,
      valid_until: '2024-12-31T00:00:00',
      low_quantity: 10,
    },
    {
      pk: 990,
      name: 'Reward Name 4',
      points: 450,
      display_img_url: '../assets/240_F_492144628_2nXnuPIsc6zi75KntNXJMU0j1wlLR07R.jpg',
      quantity: 8,
      valid_until: '2024-12-31T00:00:00',
      low_quantity: 7,
    },
    {
      pk: 991,
      name: 'Reward Name 5',
      points: 100,
      display_img_url: '',  // Testing placeholder image
      quantity: 10,
      valid_until: '2024-12-31T00:00:00',
      low_quantity: 5,
    },
    {
      pk: 992,
      name: 'Reward Name 6',
      points: 350,
      display_img_url: 'assets/240_F_501434733_S0OxxWfqztfkeT1QMmAow0qWXDC6LAWh.jpg',
      quantity: 3,  // Testing "On High Demand"
      valid_until: '2024-12-31T00:00:00',
      low_quantity: 5,
    }
  ]
  searchQuery: string = '';
  sortOrder: string = 'asc';
  filteredItems = [...this.items];
  display_img_url: string | null = '';
  sortItems() {
    if (this.sortOrder === 'asc') {
      this.items.sort((a, b) => a.name.localeCompare(b.name));
      this.sortOrder = 'desc';
    } else {
      this.items.sort((a, b) => b.name.localeCompare(a.name));
      this.sortOrder = 'asc';
    }
    this.filteredItems = [...this.items];
  }


  onSearch() {
    this.filteredItems = this.items.filter(item =>
      item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }


  clearSearch() {
    this.searchQuery = '';
    this.filteredItems = [...this.items];
  }


  highlightSearch(name: string) {
    if (!this.searchQuery) return name;
    const regex = new RegExp(`(${this.searchQuery})`, 'gi');
    return name.replace(regex, `<strong>$1</strong>`);
  }
}
