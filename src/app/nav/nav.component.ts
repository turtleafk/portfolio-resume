import { Component, Output, EventEmitter, ViewChild, OnInit, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css', './navTwo.component.css']
})
export class NavComponent implements OnInit, AfterViewInit {

  @Output() pageClicked = new EventEmitter<{pageName: string}>();
    newPageName = '';
    pageRequested = '';
    @ViewChild('burger') element: any;
    @ViewChild('dropDown1') dropDownDesk: any;
    @ViewChild('dropDown2') dropDownMobile: any;
    parent: any;
    navigation: any;
    desktopWidth: any;
    turnOffTouch: any = false;
    nav: any;
    navOpen: any = false;
    burger: any;
    dropList: any;
    width: any;
    mediaQuery: any;
    matches: any;

    ngOnInit() {
      
      this.nav = document.querySelector('nav');
      this.navigation = document.querySelector('header');
      let cursor = (e:any) => {
        let mouse = e.clientY;
        //console.log('nav event');
        if(mouse < 105 && e.view.scrollY == 0 && !this.navigation.classList.contains('active-header-dk')) {
              this.navigation.classList.add('active-header-dk');
        } else if((mouse > 300) && this.navigation.classList.contains('active-header-dk') && this.navOpen != true) {
              this.navigation.classList.remove('active-header-dk');  
        }
      }

      window.addEventListener('mousemove', cursor);

      let touchy = (e: any) => {
        //logging the current place of the top of the screen
        let y = e.view.scrollY;

        if(y < 20 && !this.navigation.classList.contains('active-header-dk')) {
          this.navigation.classList.add('active-header-dk');  
                 
        } 
      }
      
      window.addEventListener('touchend', touchy);

        

        let touchyTwo = (e: any) => {
          let x = e.view.scrollY;
          
          if(x > 40 && this.navigation.classList.contains('active-header-dk') && this.navOpen != true && e.type == 'touchend') {
            this.navigation.classList.remove('active-header-dk');
          }
        }
  
        window.addEventListener('touchend', touchyTwo);

      // event; if nav is open and browser is resized, the nav will closed and be reset
      let undoHeader = () => {
        let query = window.matchMedia('(max-width: 1450px)');
        // if the media query if false or if the browser is bigger than a certain width
        if(query.matches == false) {
          // removing the drop mobile if it is there
          if(this.dropDownMobile.nativeElement.classList.contains('drop-list-active')) {
            this.dropDownMobile.nativeElement.classList.remove('drop-list-active');
          }
          // adding the more option, if it is not already there
          if(!this.dropDownDesk.nativeElement.classList.contains('drop-list-active')) {
            this.dropDownDesk.nativeElement.classList.add('drop-list-active');
          }
          // removing all classes assigned when going below 1450px
          this.nav.classList.remove('active-nav');
          this.navigation.classList.remove('active-header-two');
          document.body.style.overflow = 'visible';
          this.navOpen = false;
          this.element.nativeElement.children[0].classList.remove('line-1');
          this.element.nativeElement.children[1].classList.remove('line-2');
          this.element.nativeElement.children[2].classList.remove('line-3');
        } else {
          // adding the mobile drop down list when the screeen is smaller
          if(!this.dropDownMobile.nativeElement.classList.contains('drop-list-active')) {
            this.dropDownMobile.nativeElement.classList.add('drop-list-active');
          }
          // removing the more option
          if(this.dropDownDesk.nativeElement.classList.contains('drop-list-active')) {
            this.dropDownDesk.nativeElement.classList.remove('drop-list-active');
          }
        }
      }
    
      window.addEventListener('resize', undoHeader);
    }

    constructor() {}

    ngAfterViewInit() {
      // getting the media query and checking if it is smaller than 1450
      this.mediaQuery = window.matchMedia('(max-width: 1450px)');
      this.matches = this.mediaQuery.matches;
      // setting the initial state of the more option
      if(this.matches === false) {
        this.dropDownDesk.nativeElement.classList.add('drop-list-active');
      } else if(this.matches === true) {
        this.dropDownMobile.nativeElement.classList.add('drop-list-active');
      }
    }

    pageRequest(event: any) {
      if(event.target.innerText === 'dev') {
        this.pageRequested = event.target.parentElement.innerText;
      } else {
        this.pageRequested = event.target.innerText;
      }
        
        this.pageRequested = this.pageRequested.toLowerCase();
        this.pageClicked.emit({
            pageName: this.pageRequested
        });
        
        //when clicking on a link, the nav, menu, and X button disappears 
        
        
        if(this.burger) {
          document.body.style.overflow = 'visible';
          this.nav.classList.remove('active-nav');
          this.burger.style.position = 'absolute';
          this.navigation.classList.remove('active-header-two');
        }
        
        
        this.navOpen = false;

        this.element.nativeElement.children[0].classList.remove('line-1');
        this.element.nativeElement.children[1].classList.remove('line-2');
        this.element.nativeElement.children[2].classList.remove('line-3');
    }

    toggleNav(event: any) {
      //getting the burger nav menu item
      this.burger = event.target.closest('.burger');

      if(!this.element.nativeElement.children[0].classList.contains('line-1')) {
        this.element.nativeElement.children[0].classList.add('line-1');
        this.element.nativeElement.children[1].classList.add('line-2');
        this.element.nativeElement.children[2].classList.add('line-3');

        this.nav.classList.add('active-nav');
        this.navigation.classList.add('active-header-two');
        this.burger.style.position = 'fixed';
        document.body.style.overflow = 'hidden';
        this.navOpen = true;
        
      } else {
        this.nav.classList.remove('active-nav');
        this.navigation.classList.remove('active-header-two');
        this.burger.style.position = 'absolute';
        document.body.style.overflow = 'visible';
        this.navOpen = false;
        this.element.nativeElement.children[0].classList.remove('line-1');
        this.element.nativeElement.children[1].classList.remove('line-2');
        this.element.nativeElement.children[2].classList.remove('line-3');
      }
        
    }

    dropDown(event: any) {
      //saving the local ref of the drop down list
      this.dropList = event;
      this.width = window.matchMedia('(max-width: 1450px)');

      if(this.width.matches == false) {
        //adding and removeing the classes to show the list '' same for removeDrop
        this.dropList.classList.add('drop-list-active');
        this.navigation.classList.add('header-expand-list');
      }
      
    }

    removeDrop() {
      this.navigation.classList.remove('header-expand-list');
      this.dropList.classList.remove('drop-list-active');
    }
}
