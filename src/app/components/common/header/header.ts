import { Component } from '@angular/core';
import { Env } from '../../../../env/env';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  appLogo: string = Env.appLogo;
}
