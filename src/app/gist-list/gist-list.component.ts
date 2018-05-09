import {Component, OnInit,} from '@angular/core';
import {GistServiceService} from '../gist-service.service'; 
import {Gist} from '../../gist';   
import {SortUtility} from '../utility/SortUtility';   


@Component({
  selector: 'app-gist-list',
  templateUrl: './gist-list.component.html',
  styleUrls: ['./gist-list.component.css']
})
export class GistListComponent implements OnInit {

  private page_number = 1;  //this controls the infinite loading
  private per_page = 40;
  private searchEnabled = false; 
  private gist_list: Gist[];
  private searchTerm;
  private searchItems = [];

  constructor(private gist: GistServiceService) {

  }
  //this function is called when you reach the bottom of the page.
  onScroll() {
    this.page_number += 1;
    this.fetch_data(this.page_number, this.per_page);
  }
  //this fucntion is called on loading the app. 
  ngOnInit(): void {
    this.fetch_data(this.page_number, this.per_page);
  }
  //this function calls http service to fetch data
  fetch_data(page_number, per_page) {
    this.gist.getGists(page_number, per_page).subscribe((gists: Gist[]) => {
      if (this.page_number == 1) {
        this.gist_list = gists;
      } else {
        for (let i = 0; i < gists.length; i++) {
          this.gist_list.push(gists[i]);
        }
      }
    });
  }
 //this function sorts the data in the user specified way
  sortArray(type) {
    switch (type) {
      case 1:
        SortUtility.sortByLastUpdated(this.gist_list);
        break;
      case 2:
        SortUtility.sortByFirstUpdated(this.gist_list);
        break;
      case 3:
        SortUtility.sortByName(this.gist_list);
        break;
      case 4:
        SortUtility.sortByLastDescription(this.gist_list);
        break;
    }
  }

  //this function enables and disables search mode.
  changeSearch() {
    this.searchEnabled = !this.searchEnabled;
  }
  

  //this function searches for the required term in data.
  onSearch(searchVal) {
    this.searchItems = [];
    for (let i = 0, size = this.gist_list.length; i < size; i++) {
      if (this.gist_list[i].owner.login.includes(searchVal) || this.gist_list[i].description.includes(searchVal)) {
        this.searchItems.push(this.gist_list[i]);
      }
    }
  }

}
