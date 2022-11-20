import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  // Signals that the search list was updated.
  public readonly queryChanged$ = new Subject<string>();

    // Signals that the a video was selected.
    public readonly videoSelected$ = new Subject<string>();
}
