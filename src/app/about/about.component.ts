import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [`
    .image {
      background-image: url('https://careerfoundry.com/en/blog/uploads/web_dev_pillar_page.jpg');
      height: 38vh;
      min-height: 320px;
      width: 40vw;
      min-width: 100%;
      background-size: cover;
    }
    .image2 {
        background-image: url('https://cdn-images-1.medium.com/max/1600/1*p6ahiOqtwW6mxgk-WCDvlg.jpeg');
        height: 38vh;
        min-height: 320px;
        width: 40vw;
        min-width: 100%;
        background-size: cover;
    }

    .col-md-8 {
      margin-top: 20px;
    }

    .container {
        margin: 20px auto 0;
        height: 85vh;
        padding: 0 20px 0 10px;
        overflow-y: hidden;
    }

    .row {
        padding: 10px 0;
    }
    .about-text {
        padding: 20px 20px 0 40px;
        text-align: justify;
        font-size: 20px;
        padding: 20px;
        line-height: 35px;
    }

    @media (max-width: 1200px) {
      .about-text {
        font-size: 17px;
      }
    }

    @media (max-width: 848px) {
      .container {
        overflow-y: visible;
      }
    }
      @media (max-height: 950px) {
        .container {
          overflow-y: visible;
        }
      }
  `]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
