import {AfterViewInit, Component, OnInit} from '@angular/core';
import Swiper from 'swiper';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, AfterViewInit {
  mySwiper: Swiper;
  images: string[] = [
    'assets/banner/castle.png',
    'assets/banner/hogwarts_exp.png',
    'assets/banner/hypogriff.png',
  ];
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container');
  }

}
