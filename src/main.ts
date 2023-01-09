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
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
    }),
  ],
}).catch((err) => console.error(err));
