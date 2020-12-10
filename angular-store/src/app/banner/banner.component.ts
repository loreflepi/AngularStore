import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  images: string[] = [
    'assets/banner/castle.png',
    'assets/banner/hogwarts_exp.png',
    'assets/banner/hypogriff.png',
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
