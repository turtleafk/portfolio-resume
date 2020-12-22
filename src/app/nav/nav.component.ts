import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  @Output() pageClicked = new EventEmitter<{pageName: string}>();
    newPageName = '';
    pageRequested = '';
    toggle = 'off';
    element: any;
    parent: any;

    pageRequest(event: any) {
      console.log(event);
        this.pageRequested = event.target.innerText;
        this.pageRequested = this.pageRequested.toLowerCase();
        this.pageClicked.emit({
            pageName: this.pageRequested
        });
    }

    toggleNav(data: any) {
      this.element = data.target.parentElement.lastChild;
      this.parent = data.target.parentElement;
  
      if(this.toggle == 'off') {
        this.toggle = 'on';
        this.parent.style.height = '300px';
      } else {
        this.toggle = 'off';
        this.parent.style.height = '80px';

      }
    
    }

}
