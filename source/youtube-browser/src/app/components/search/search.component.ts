import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StringHelper } from 'src/app/helpers/string.helper';
import { EventService } from 'src/app/services/event/event.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  // The search value entered into the matInput search.
  readonly searchControl: FormControl = new FormControl();

  constructor(private readonly eventService: EventService) { }

  ngOnInit(): void {
  }

  /**
   * Calls the YoutubeDataService to fetch data from the
   * YouTube Data API on searching.
   */
  public async onSearch(): Promise<void> {
    try {
      const query: string = this.searchControl.value;
      if (StringHelper.isNullOrEmpty(query)) return;
      this.eventService.queryChanged$.next(query);
    }
    catch (error: any) {
      throw Error(
        `\nSomething went wrong while searching for a video.\n${error.message}`)
    }
  }
}
