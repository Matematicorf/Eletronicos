import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Certifique-se que o caminho é exatamente este

bootstrapApplication(AppComponent)
  .catch((err) => console.error(err));
