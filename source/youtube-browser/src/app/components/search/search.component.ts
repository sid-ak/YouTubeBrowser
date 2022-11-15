import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  readonly searchControl: FormControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Calls the YouTube Data service to fetch data from the
   * YouTube Data API on searching.
   * TODO: Remove the console.log and integrate the API.
   */
  onSearch() {
    console.log(this.searchControl.value);
  }

}
