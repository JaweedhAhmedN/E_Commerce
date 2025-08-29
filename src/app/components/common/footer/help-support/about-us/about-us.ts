import { Component, OnInit } from '@angular/core';
import { Env } from '../../../../../../env/env';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-us',
  imports: [RouterLink],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css'
})
export class AboutUs implements OnInit{
  appName = Env.appName;

  ngOnInit(): void {
    // auto scroll top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
