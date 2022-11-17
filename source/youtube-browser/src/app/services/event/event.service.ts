import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { YoutubeSearchList } from 'src/app/models/youtube-data.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  public readonly searchChanged$ = new Subject<YoutubeSearchList>();
}
