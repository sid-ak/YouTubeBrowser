import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { YoutubeSearchList } from 'src/app/models/youtube-data.model';
import { EventService } from 'src/app/services/event/event.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit, OnDestroy {

  private readonly destroyed$ = new EventEmitter<boolean>();

  public searchList: YoutubeSearchList = new YoutubeSearchList();

  public test: string = "https://material.angular.io/assets/img/examples/shiba2.jpg"

  constructor(private readonly eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.searchChanged$.pipe(
      takeUntil(this.destroyed$)).subscribe(
        (e: YoutubeSearchList) => {
          this.searchList = e;
          console.log(this.searchList);
        });
    
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }

}