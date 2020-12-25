import { Component, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  @Output() pageClicked = new EventEmitter<{pageName: string}>();
    newPageName = '';
    pageRequested = '';
    @ViewChild('burger') element: any;
    parent: any;


    pageRequest(event: any) {
        this.pageRequested = event.target.innerText;
        this.pageRequested = this.pageRequested.toLowerCase();
        this.pageClicked.emit({
            pageName: this.pageRequested
        });
    }

    toggleNav() {
      if(!this.element.nativeElement.children[0].classList.contains('line-1')) {
        this.element.nativeElement.children[0].classList.add('line-1');
        this.element.nativeElement.children[1].classList.add('line-2');
        this.element.nativeElement.children[2].classList.add('line-3');

        document.querySelector('.nav')?.classList.add('active-nav');
      } else {
        this.element.nativeElement.children[0].classList.remove('line-1');
        this.element.nativeElement.children[1].classList.remove('line-2');
        this.element.nativeElement.children[2].classList.remove('line-3');

        document.querySelector('.nav')?.classList.remove('active-nav');
      }
        
    }

}
