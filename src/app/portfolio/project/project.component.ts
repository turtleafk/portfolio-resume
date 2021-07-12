import { Component, OnInit, Input, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit, AfterContentInit {
  // un means the heading, deux means the imagePath, trois means the sitelink
  @Input() data: {un: string, deux: string, trois: string};
  image: string = '';
  photo : string = '';

  constructor() {
    //initiating the data var 
    this.data = {un: '', deux: '', trois: ''};
  }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    //if the data is retreived, then I get the imagePath string and surround it with quotes to insert in the dom
    if(this.data.deux) {
      this.image = this.data.deux;
      this.image = '\'/assets/images/' + this.image + '.png\'';
      this.photo = `url(${this.image})`;
    }
  }
  

}
