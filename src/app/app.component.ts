import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  page = '';
  notLoaded = '';
  phoneNumber = '';

  @ViewChild("loginForm") login: any;
  @ViewChild("contactForm") contact: any;

  constructor() {
    window.addEventListener('unload', (e:any) => {
      window.scrollTo(0, 0);
    }); 
    this.phoneNumber = '(850)300-8126';
  }

  ngAfterViewInit() { }

  pageNamed(pageData: {pageName: string}) {
    if(!pageData.pageName.includes('login') && !pageData.pageName.includes('contact')) {
      this.page = pageData.pageName;
      this.notLoaded = this.page;
    } else if(pageData.pageName.includes('login')) {
      this.login.nativeElement.classList.add('login-active');
    } else if(pageData.pageName.includes('contact')) {
      this.contact.nativeElement.classList.add('contact-active');
    }
  }

  pageNamedTwo(pageData: {pageNameTwo: string}) {
    
    if(pageData.pageNameTwo) {
      this.page = pageData.pageNameTwo;
      this.notLoaded = this.page;
    }
  }

  pageNamedThree(pageData: {pageNameThree: string}) {
    if(!pageData.pageNameThree.includes('Login') && !pageData.pageNameThree.includes('Contact')) {
      this.page = pageData.pageNameThree.toLowerCase();
      this.notLoaded = this.page;
    } else if(pageData.pageNameThree.includes('Login')) {
      this.login.nativeElement.classList.add('login-active');
    } else if(pageData.pageNameThree.includes('Contact')) {
      this.contact.nativeElement.classList.add('contact-active');
    }
  }

  exitLogin() {
    this.login.nativeElement.classList.remove('login-active');
  }

  exitContact(phone: any) {
    this.contact.nativeElement.classList.remove('contact-active');
    phone.classList.remove('form-control-active');
  }

  showPhone(x: any) {
    x.classList.add('form-control-active');
  }
}
