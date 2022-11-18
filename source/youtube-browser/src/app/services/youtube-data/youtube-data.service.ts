import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { firstValueFrom, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { YoutubeSearchList, YoutubeVideo } from 'src/app/models/youtube-data.model';

@Injectable({
  providedIn: 'root'
})
export class YoutubeDataService {

  private readonly apiKey: string = environment.apiKey;
  private readonly searchUrl: string = `https://www.googleapis.com/youtube/v3/search?key=${this.apiKey}`;
  
  constructor(private readonly http: HttpClient) { }

  /**
   * Gets the YouTube search result based on the provided query.
   * @param query 
   * @returns 
   */
  public getSearchList(query: string): Promise<YoutubeSearchList> {
    
    const options = { 
      observe: "body" as const,
      responseType: "json" as const,
      params: new HttpParams()
        .set("part", "snippet")
        .set("maxResults", 10)
        .set("type", "video")
        .set("q", query)
    };

    return firstValueFrom(
      this.http.get<YoutubeSearchList>(this.searchUrl, options).pipe(
        map((e: any) => {
          return new YoutubeSearchList(
            query,
            e.nextPageToken,
            (e.items as []).map((e: any) => new YoutubeVideo(e.snippet)));
          })
      ));
  }

    /**
   * Gets the YouTube search result on the next page with the next page token.
   * @param query 
   * @returns 
   */
     public getNextPage(query: string, nextPageToken: string): Promise<YoutubeSearchList> {
    
      const options = { 
        observe: "body" as const,
        responseType: "json" as const,
        params: new HttpParams()
          .set("part", "snippet")
          .set("maxResults", 10)
          .set("type", "video")
          .set("q", query)
          .set("pageToken", nextPageToken)
      };
  
      return firstValueFrom(
        this.http.get<YoutubeSearchList>(this.searchUrl, options).pipe(
          map((e: any) => {
            return new YoutubeSearchList(
              query,
              e.nextPageToken,
              (e.items as []).map((e: any) => new YoutubeVideo(e.snippet)));
            })
      ));
    }
}
