import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Env } from './env/env';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

// Dynamic AppName
document.title = Env.appName;

// Dynamic Favicon
const favicon = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
favicon.href = Env.appLogo;


