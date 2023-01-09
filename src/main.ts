import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AppComponent } from './app/app.component';
import { vaultReducer } from './app/store/reducer';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([]),
    provideStore({ NgVault: vaultReducer }),
    provideStoreDevtools(),
  ],
}).catch((err) => console.error(err));
