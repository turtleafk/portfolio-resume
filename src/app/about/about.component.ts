
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { __classPrivateFieldSet } from 'tslib';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: [`./about.component.css`, './aboutTwo.component.css', './aboutThree.component.css'],
  providers: [AboutService]
})
export class AboutComponent implements AfterViewInit {
  data: any[];
  skills: any[];
  certs: any[];
  @ViewChild('certs') certifications: any;
  title: string = 'Professional Bio';


  constructor(private _aboutService: AboutService) { 
    this.skills = this._aboutService.getSkills();
    this.data = this._aboutService.getData();
    this.certs = this._aboutService.getCerts();

    //get the name to put in the header from the links themselves
    //find a way other than scroll event to link the passing by of sections
    //now only change the title when the screen is below 1450px
    //and only change the nav link highlighted text when it is above 1450px
    //fix how the side nav goes below the footer mark
    //enable side nav links to be clcikable and close when a link is clicked
    //also on touch when a user touches outside the nav it closes
  }

  ngAfterViewInit() {
    let certArr = this.certifications.nativeElement.parentElement.children;
    for(let i = 1; i < certArr.length; i++) {
      if(i % 2 == 0) {
        certArr[i].style.backgroundColor = 'rgb(' + 20 + ', ' + 20 + ', ' + 20 + ')';
      }
    }
    
  }

  //adds a slide show to the exp image
  slideshow(event: any) {
    event.target.classList.add('exp-img-active');
  }

  //removes it
  stopSlideshow(event: any) {
    event.target.classList.remove('exp-img-active');
  }

  expandNav() {
    let nav = document.querySelector('.side-nav');
    let arrow = document.querySelector('.nav-open-icon');
    arrow?.classList.add('nav-icon-hide');

    if(nav?.classList.contains('side-nav-inactive')) {
      nav?.classList.remove('side-nav-inactive');
    }
    nav?.classList.add('side-nav-active');
  }

  closeNav() {
    let nav = document.querySelector('.side-nav');
    let arrow = document.querySelector('.nav-open-icon');
    arrow?.classList.remove('nav-icon-hide');

    nav?.classList.remove('side-nav-active');
    nav?.classList.add('side-nav-inactive');
    setTimeout(() => {
      nav?.classList.remove('side-nav-inactive');
    }, 800);
  }
}
