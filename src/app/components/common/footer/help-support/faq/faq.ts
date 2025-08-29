import { Component, OnInit } from '@angular/core';
import { Env } from '../../../../../../env/env';

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})
export class Faq implements OnInit{
  appName = Env.appName;

  ngOnInit(): void {
    // Auto Scroll Top
    window.scrollTo({ top: 0, behavior: 'smooth' });    
  }
}
