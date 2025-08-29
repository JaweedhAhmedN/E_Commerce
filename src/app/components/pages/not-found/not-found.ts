import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css'
})
export class NotFound implements OnInit{

  ngOnInit(): void {
    // Auto Scroll Top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
