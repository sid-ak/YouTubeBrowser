import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StringHelper } from 'src/app/helpers/string.helper';
import { YoutubeSearchList } from 'src/app/models/youtube-data.model';
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
   * 
   * TODO: Use search list to update DOM and remove console.log(). 
   */
  public async onSearch(): Promise<void> {
    try {
      const query: string = this.searchControl.value;
      if (StringHelper.isNullOrEmpty(query)) return;

      const searchList: YoutubeSearchList = await this.ytService.getSearchList(query);

      console.log(searchList);
    }
    catch (error: any) {
      throw Error(
        `\nSomething went wrong while searching for a video.\n${error.message}`)
    }
  }

}
