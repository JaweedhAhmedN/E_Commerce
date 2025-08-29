import { Component, OnInit } from '@angular/core';
import { Env } from '../../../../../../env/env';

@Component({
  selector: 'app-terms-conditions',
  imports: [],
  templateUrl: './terms-conditions.html',
  styleUrl: './terms-conditions.css'
})
export class TermsConditions implements OnInit{
  appName = Env.appName;

  ngOnInit(): void {
    // Auto Scroll Top
    window.scrollTo({ top: 0, behavior: 'smooth' });     
  }
}
