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

  onSearch() {
    console.log(this.searchControl.value);
  }

}
