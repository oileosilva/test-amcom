import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { provideEnvironmentNgxMask } from 'ngx-mask';
registerLocaleData(localePt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'pt-BR'
    },
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
    provideEnvironmentNgxMask()
  ]
};
