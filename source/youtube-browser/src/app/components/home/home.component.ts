import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event/event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private readonly eventService: EventService,
    private readonly router: Router) { }

  // Triggers events to handle navigation and its data.
  ngOnInit(): void {
    this.eventService.queryChanged$.subscribe(
      query => this.router.navigate(
        ["video-list"],
        {queryParams: {query: query}})
    );

    this.eventService.videoSelected$.subscribe(
      videoId => this.router.navigate(
        ["video"],
        {queryParams: {id: videoId}})
    );
  }

}
