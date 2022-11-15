import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  // The search value entered into the matInput search.
  readonly searchControl: FormControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Calls the YoutubeDataService to fetch data from the
   * YouTube Data API on searching.
   * 
   * TODO: Remove the console.log and integrate the API.
   */
  onSearch() {
    console.log(this.searchControl.value);
  }

}
