import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { IConfig } from 'src/app/interfaces/config.interface';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  
  // The path to the config.json file.
  private readonly configUrl = "assets/config.json";

  constructor(private http: HttpClient) { }

  /**
   * Gets config data for the app.
   * @returns 
   */
  public getConfig(): Promise<IConfig> {
    return firstValueFrom(
      this.http.get<IConfig>(this.configUrl));
  }
}
