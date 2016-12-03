import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';
import { Router } from '@angular/router'



if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule,Router);
