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

  isApiKeySet: boolean = false;
  errorMessage: string = "";

  constructor(private readonly configService: ConfigService) {}

  ngOnInit(): void {
    this.setApiKey();
  }

  private async setApiKey() {
    if (this.isApiKeySet) return;
    
    try {
      const config: Config = await this.configService.getConfig();
      const apiKey: string = config.apiKey;
      
      if (apiKey == "" || apiKey == undefined)
        throw Error("API key not found in config.json.") 
      
      environment.apiKey = config.apiKey;
      this.isApiKeySet = true;
    }
    catch (error: any) {
      this.errorMessage = "\nError: API key not set.\nPlease ensure the following:\n"
        + "- The config.json file is in directory: source\\youtube-browser\\src\\assets\n"
        + "- The config.json file contains the required API key.\n"
        + `\n${error.message}`;
      console.log(this.errorMessage);
    }
  }

}
