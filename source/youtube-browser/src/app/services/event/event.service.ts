import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { YoutubeSearchList } from 'src/app/models/youtube-data.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  // Signals that the the search list was updated.
  public readonly queryChanged$ = new Subject<string>();
}
