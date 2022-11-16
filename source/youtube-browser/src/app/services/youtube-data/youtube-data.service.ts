import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class YoutubeDataService {

  private readonly apiKey: string = environment.apiKey;
  private readonly searchUrl: string = `https://www.googleapis.com/youtube/v3/search?key=${this.apiKey}`;
  
  constructor(private readonly http: HttpClient) { }

  getYoutubeVideo(query: string) {
    
    const options = { 
      observe: "body" as const,
      responseType: "json" as const,
      params: new HttpParams()
        .set("part", "snippet")
        .set("type", "video")
        .set("q", query)
    };

    return firstValueFrom(
      this.http.get(this.searchUrl, options));
  }
}
