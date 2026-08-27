import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component'; // Certifique-se que o caminho é exatamente este

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
