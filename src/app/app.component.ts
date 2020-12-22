import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  page = '';
  notLoaded = '';

  pageNamed(pageData: {pageName: string}) {
      this.page = pageData.pageName;
      this.notLoaded = this.page;

      
  }
}
