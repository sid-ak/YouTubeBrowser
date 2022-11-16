import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { YoutubeDataService } from 'src/app/services/youtube-data/youtube-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  // The search value entered into the matInput search.
  readonly searchControl: FormControl = new FormControl();

  constructor(private readonly ytService: YoutubeDataService) { }

  ngOnInit(): void {
  }

  /**
   * Calls the YoutubeDataService to fetch data from the
   * YouTube Data API on searching.
   */
  async onSearch() {
    const query: string = this.searchControl.value;
    const searchResult = await this.ytService.getYoutubeVideo(query);
    console.log(searchResult);
  }

}
