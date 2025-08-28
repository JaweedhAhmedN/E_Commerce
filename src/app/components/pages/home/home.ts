import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../services/home-service/home-service';
import { CommonModule } from '@angular/common';
import { Env } from '../../../../env/env';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit{
  appName = Env.appName;

  categoryList: any[] = [];

  constructor(private homeService: HomeService) {}
  
  ngOnInit(): void {
   this.homeService.getCategoryList().subscribe(data => {this.categoryList = data});
  }
}
