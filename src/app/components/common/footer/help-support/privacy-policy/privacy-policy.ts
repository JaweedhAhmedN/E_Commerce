import { Component, OnInit } from '@angular/core';
import { Env } from '../../../../../../env/env';

@Component({
  selector: 'app-privacy-policy',
  imports: [],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.css'
})
export class PrivacyPolicy implements OnInit{
  appName = Env.appName;

  ngOnInit(): void {
    // Auto Scroll Top
    window.scrollTo({ top: 0, behavior: 'smooth' });        
  }
}