import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Config } from 'src/app/interfaces/config.interface';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  
  private readonly configUrl = "assets/config.json";

  constructor(private http: HttpClient) { }

  getConfig(): Promise<Config> {
    return firstValueFrom(
      this.http.get<Config>(this.configUrl));
  }
}
