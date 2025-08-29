import { Component, OnInit } from '@angular/core';
import { Env } from '../../../../../../env/env';

@Component({
  selector: 'app-e-waste-policy',
  imports: [],
  templateUrl: './e-waste-policy.html',
  styleUrl: './e-waste-policy.css'
})
export class EWastePolicy implements OnInit{
  appName = Env.appName;

  ngOnInit(): void {
    // Auto Scroll Top
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  }
}
