import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Config } from './interfaces/config.interface';
import { ConfigService } from './services/config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'youtube-browser';

  isApiKeySet: boolean = environment.apiKey != "";
  errorMessage: string = "";

  constructor(private readonly configService: ConfigService) {}

  ngOnInit(): void {
    this.setApiKey();
  }

  /**
   * Sets the API key required to send requests from the app.
   */
  private async setApiKey() {
    if (this.isApiKeySet) return;

    try {

      // Use the ConfigService to get the API key.
      const config: Config = await this.configService.getConfig();
      const apiKey: string = config.apiKey;
      
      if (apiKey == "" || apiKey == undefined)
        throw Error("API key not found in config.json.") 
      
      // Set the API key in environment.ts.
      environment.apiKey = config.apiKey;

      // Set this to true so the app can render.
      this.isApiKeySet = true;
    }
    catch (error: any) {
      
      // Set the error message that the API key was not set.
      this.errorMessage = "\nError: API key not set.\nPlease ensure the following:\n"
        + "- The config.json file is in directory: source\\youtube-browser\\src\\assets\n"
        + "- The config.json file contains the required API key.\n"
        + `\n${error.message}`;

      console.log(this.errorMessage);
    }
  }

}
