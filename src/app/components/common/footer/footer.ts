import { Component } from '@angular/core';
import { Env } from '../../../../env/env';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  appName: string = Env.appName;
}
