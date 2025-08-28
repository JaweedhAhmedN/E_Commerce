import { Component } from '@angular/core';
import { Env } from '../../../../env/env';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  appName: string = Env.appName;
}
