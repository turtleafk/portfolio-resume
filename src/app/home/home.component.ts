import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VideoService } from '../tv/tv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css', 
    './homeTwo.component.css', 
    './homeThree.component.css', 
    './homeFour.component.css',
    './homeFive.component.css'],
    providers: [VideoService]
})
export class HomeComponent implements OnInit {
  @Output() pageClickedTwo = new EventEmitter<{pageNameTwo: string}>();
  div: any;
  desc: any;
  videoService: any;
  latestVideo: any;

  vid: any;
  homeVid: any;
  title: string;
  step1: any;
  step2: any;
  step3: any;
  step4: any;
  step5: any;
  alt: any;
  whichTint: any;
  which: any;
  touch: any;
  touchArray: any = [];
  touchEnd: any;
  touchStart: any;
  scroll: any;
  query: any;
  query2: any;
  navigation: any;
  target: any;
  requested: any;


  constructor(public _videoService: VideoService) { 
    this.videoService = this._videoService.getVideos();
    this.latestVideo = this.videoService[0];
    this.title = this.videoService[0].title;
  }

  ngOnInit(): void {
    this.div = document.querySelector('.content');
    this.step1 = document.querySelector('.step-1');
    this.step2 = document.querySelector('.step-2');
    this.step3 = document.querySelector('.step-3');
    this.step4 = document.querySelector('.step-4');
    this.step5 = document.querySelector('.step-5');
    this.homeVid = document.querySelector('.vid');
    
    //function expression for scoll events
    let show = (e:any) => {
      this.query = document.body.clientHeight;
      //console.log('listener triggered');

      if(!e.touches) {
  
      this.scroll = e.target.documentElement.scrollTop;

        if(this.scroll > 100 && this.scroll < 500) {
          this.div.classList.add('content-active');
        }
        //determine the when to show content based on the client height
        if(this.query < 4500) {

          if(this.scroll > 550) {
            this.addVid();
          }

          if(this.scroll > 1500) {
            this.addBoxes();
            window.removeEventListener('scroll', show);
          }

        } else if(this.query > 4500 && this.query < 5450) {

            if(this.scroll > 1750) {
              this.addVid();
            }

            if(this.scroll > 2000) {
              this.addBoxes();
              window.removeEventListener('scroll', show);
            }
        } else if(this.query > 5450) {

          if(this.scroll > 1750) {
            this.addVid();
          }

          if(this.scroll > 3000) {
            this.addBoxes();
            window.removeEventListener('scroll', show);
          }
        }
      } 
    }

    //function expression for touch events
    let touchShow = (e:any) => {
      this.query2 = document.body.clientHeight;

      if(e.type == 'touchend') {
       
        this.touchEnd = e.view.scrollY;

        if(this.touchEnd > 200 && this.touchEnd < 500) {
          this.div.classList.add('content-active');
        }
        //determine the when to show content based on the client height
        if(this.query2 < 4500) {

          if(this.touchEnd > 550) {
            this.addVid();
          }

          if(this.touchEnd > 1500) {
            this.addBoxes();
            window.removeEventListener('touchend', touchShow);
          }

        } else if(this.query2 > 4500 && this.query2 < 5350) {

            if(this.touchEnd > 1750) {
              this.addVid();
            }

            if(this.touchEnd > 2800) {
              this.addBoxes();
              window.removeEventListener('touchend', touchShow);
            }
        } else if(this.query2 > 5350) {

          if(this.touchEnd > 1750) {
            this.addVid();
          }

          if(this.touchEnd > 3400) {
            this.addBoxes();
            window.removeEventListener('touchend', touchShow);
          }
        }
      } 
    }

    window.addEventListener('touchend', touchShow);
    window.addEventListener('scroll', show);

    //function expression to remove both of the above listeners if you visit a different page
    let navClick = (e: any) => {
      if(e.target.closest('a')) {
        this.target = e.target.innerText.toLowerCase();
        if(this.target == 'dev tv' || this.target == 'about me' || this.target == 'blog' || this.target == 'projects') {
          window.removeEventListener('scroll', show);
          window.removeEventListener('touchend', touchShow);
          this.navigation.removeEventListener('click', navClick);
        }
      }  
    }

    this.navigation = document.querySelector('nav');
    this.navigation.addEventListener('click', navClick);
    
  }

  addVid() {
    this.homeVid.classList.add('vid-slide-active');
  }

  addBoxes() {
    this.step1.classList.add('move-step');
    setTimeout(() => {
      this.step2.classList.add('move-step');
    }, 500);
    setTimeout(() => {
      this.step3.classList.add('move-step');
    }, 1000);
    setTimeout(() => {
      this.step4.classList.add('move-step');
    }, 1500);
    setTimeout(() => {
      this.step5.classList.add('move-step');
    }, 2000);
  }

  slideUp(event: any) {
    //hover over images and changes tint height
    //console.log(event);
    this.alt = event.target.alt;
    if(this.alt === 'electronic devices' || event.target.classList.contains('tint-un')) {
      this.which = 0;
    } else if(this.alt === 'letters seo' || event.target.classList.contains('tint-duex')) {
      this.which = 1;
    } else if(this.alt === 'facebook logo'  || event.target.classList.contains('tint-trois')) {
      this.which = 2;
    } else if(this.alt === 'letters'  || event.target.classList.contains('tint-quatre')) {
      this.which = 3;
    }
    this.whichTint = document.querySelectorAll('.tinty')[this.which];
    this.whichTint.classList.add('active-tinty');
  }

  slideDown() {
    //removing the added tint height
    this.whichTint = document.querySelectorAll('.tinty')[this.which];
    this.whichTint.classList.remove('active-tinty');
  }

  pageRequested(event: any) {
    if(event.target.innerText) {
      this.requested = event.target.innerText;
      
      this.pageClickedTwo.emit({
        pageNameTwo: this.requested
      });
    }
    
  }
}
