import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  @Input() article: any;
  clicked: boolean = false;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  openBlog() {
    this.clicked = true;
  }

  toList() {
    this.clicked = false;
  }
}
