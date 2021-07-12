import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Output() pageClickedThree = new EventEmitter<{pageNameThree: string}>();
  requested: any;

  constructor() {
   }

  ngOnInit(): void {
  }

  pageRequesteded(event: any) {
    if(event.target.innerText === 'dev') {
      this.requested = event.target.parentElement.innerText;
    } else {
      this.requested = event.target.innerText;
    }
      
      this.pageClickedThree.emit({
        pageNameThree: this.requested
      });

  }
}
