import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs';
import { YoutubeVideo } from 'src/app/models/youtube-data.model';
import { YoutubeDataService } from 'src/app/services/youtube-data/youtube-data.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit, OnDestroy {

  private readonly destroyed$ = new EventEmitter<boolean>();

  public video: YoutubeVideo | null = null

  constructor(
    private readonly ytService: YoutubeDataService,
    private readonly activatedRoute: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    var videoId: string = "";

    this.activatedRoute.queryParams.pipe(
      takeUntil(this.destroyed$)).subscribe(
        e => videoId = (e['id'])
      );
    
    const video = await this.ytService.getVideo(videoId);
    this.video = video;

    console.log(video);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }

}
