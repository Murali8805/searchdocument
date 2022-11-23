import { Component } from '@angular/core';
import { AppDataService } from '../../services/app-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  public allData: any;
  public filterCategoryData: any;
  public searchText: string = '';
  public selectedId = 'all';

  public menus = [
    {
      name: 'All',
      id: 'all',
    },
    {
      name: 'Financial',
      id: 'finance',
    },
    {
      name: 'Technical',
      id: 'tech',
    },
    {
      name: 'Marketing',
      id: 'marketing',
    },
    {
      name: 'Human resources',
      id: 'hr',
    },
  ];

  constructor(private dataService: AppDataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      this.allData = data;
      this.filterCategoryData = this.allData;
    });
  }

  filterCategory(id: string) {
    this.searchText = '';
    this.selectedId = id;
    if (id === 'all') {
      this.filterCategoryData = this.allData;
    } else {
      this.filterCategoryData = this.allData.filter((data: any) => {
        return data.type === id;
      });
    }
  }
}
