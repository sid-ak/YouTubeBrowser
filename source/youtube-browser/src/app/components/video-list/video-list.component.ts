import { Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { YoutubeSearchList, YoutubeVideo } from 'src/app/models/youtube-data.model';
import { EventService } from 'src/app/services/event/event.service';
import { YoutubeDataService } from 'src/app/services/youtube-data/youtube-data.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit, OnDestroy {

  private readonly destroyed$ = new EventEmitter<boolean>();
  private query: string = "";
  
  public searchList: YoutubeSearchList = new YoutubeSearchList();

  constructor(
    private readonly eventService: EventService,
    private readonly ytService: YoutubeDataService) { }

  /**
   * Reacts to an update to the search list value.
   * Initializes the search list.
   */
  ngOnInit(): void {
    this.eventService.queryChanged$.pipe(
      takeUntil(this.destroyed$)).subscribe(
        (query: string) => {
          this.initList(query);
        });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }

  /**
   * Initializes the video list.
   * @returns 
   */
  async initList(query: string): Promise<void> {
    try {
      if (query === "") return;
      this.query = query;
      this.searchList = await this.ytService.getSearchList(this.query);
    }
    catch (error: any) {
      throw Error(
        `\nSomething went wrong while retrieving videos.\n${error.message}`)
    }
  }

  /**
   * Handles the infinite scrolling while updating the video list.
   * @returns 
   */
  onScroll(): void {
      const videoScrollElement = document.getElementById("video-list-scroll");
      if (videoScrollElement === null) return;

      // Get the total scroll height, height from top and visible scroll height.
      const scrollHeight = videoScrollElement.scrollHeight;
      const scrollTop = videoScrollElement.scrollTop;
      const clientHeight = videoScrollElement.clientHeight;

      // If the user has scrolled all the way to the bottom.
      if (scrollHeight - scrollTop - clientHeight === 0)
        this.updateList();
  }

  /**
   * Updates the video list with new data.
   */
  async updateList(): Promise<void> {
    try {
      const nextPage = await this.ytService.getNextPage(
        this.query, this.searchList.nextPageToken);
      
      // Set the current page token to the next one.
      this.searchList.nextPageToken = nextPage.nextPageToken;
      
      // Update the video list.
      this.searchList.videos = [...this.searchList.videos, ...nextPage.videos];
    }
    catch (error: any) {
      throw Error(
        `\nSomething went wrong while updating the video list.\n${error.message}`)
    }
  }
}
