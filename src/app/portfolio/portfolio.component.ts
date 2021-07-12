import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ProjectService } from './projects.service';
import { Project } from './project.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css', './portfolioTwo.component.css'],
  providers: [ProjectService]
})
export class PortfolioComponent implements OnInit, AfterViewInit {

  basicProjectData: {un: string, deux: string, trois: string}[] = [];
  incomingData: Project[];
  projectObject: {
    un: string,
    deux: string,
    trois: string
  } = {
    un: '',
    deux: '',
    trois: ''
  };
  projectElement: any;
  projectIndex: string = '';
  url: string = '';
  allProjects: any;
  allIndexes: any;

  project: any;
  mainImage: string = 'url(\'/assets/images/image-2.png\')';
  title: string = 'Recipe App';
  siteUrl: string = 'https://recipe-fd72e.firebaseapp.com/';
  details: string[] = [
    'Integrating Rest API to retreive the recipes', 
    'Servings algorithm to fix amounts based on servings', 
    'Algorithm to add/delete individual ingredients'];
  logos: string[] = ['\\f13b', '\\f38b', '\\f836', '\\f3b8', '\\f420'];
  logoArrLength: number[] = [];
  currentLength: number = 0;
  originalLogoArr: string[] = [];
  imageDiv: any;
  
  @ViewChild('something1') bsSpan: any;
  @ViewChild('something2') ngSpan: any;

  //looking at the local reference of the projects container
  @ViewChild('projects') container: any; //

  constructor(private _projectService: ProjectService) { 
    //getting the projects from the service
    this.incomingData = this._projectService.getProjects();

    //going through the retrieved projects and selecting specific data to send to child
    for(let i = 0; i < this.incomingData.length; i++) {
      //putting selected data into an object to put into an array
      this.projectObject = {
        un: this.incomingData[i].title,
        deux: this.incomingData[i].imagePath,
        trois: this.incomingData[i].siteUrl
      }
      //array of object to send to child with ngFor directive 
      this.basicProjectData.push(this.projectObject);
    }
    
    //fix the logo display, the last function handles it, with logo length
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.container.nativeElement.children[0].classList.add('project-active');
  }

  // display logos dynamically
  displayProject(event: any) {
    // getting the project Element
    // this.projectElement = event.target.closest('app-project');
    // finding the closest div of what is clicked on, which is the div we want
    this.imageDiv = event.target.closest('div');
      
      this.projectElement = this.imageDiv.parentElement.parentElement;
      //console.log(this.projectElement);
      // getting all the projects
      this.allProjects = this.projectElement.parentElement.children;
      // remove the active classes from all
      for(let i = 0; i < this.allProjects.length; i++) {
        this.allProjects[i].classList.remove('project-active');
      }
      // add the active class
      this.projectElement.classList.add('project-active');
      
      
      // getting the index value of that element
      //
      //
      // so it is not detecting a length of 5 in attributes
      this.allIndexes = this.projectElement.attributes;
      for(let z = 0; z < this.allIndexes.length; z++) {
        if(this.allIndexes[z].localName == 'data-index') {
          this.projectIndex = this.allIndexes[z].textContent;
        }
      }
      
      // setting the image by index based on the click, data-index
      this.url = '\'/assets/images/image-' + this.projectIndex + '.png\'';
      this.mainImage = `url(${this.url})`;
      // getting the project info based on the item clicked, data-index
      this.project = this.incomingData[parseInt(this.projectIndex)];
      // setting the info in individual vars to display on DOM
      // getting the project title to display in DOM
      this.title = this.project.title;
      // getting the siteUrl
      this.siteUrl = this.project.siteUrl;
      // getting the details
      this.details.push(this.project.data.detailUn, this.project.data.detailDeux, this.project.data.detailTrois);
      // erasing previous details from the array
      if(this.details.length > 3) {
        this.details.splice(0, 3);
      }
      // getting the logo array
      this.logos.push(...this.project.langLogos); 
      // pushing the lengths of the array into an array
      this.logoArrLength.push(this.logos.length);
      // keeping the array of lengths at a length of 2
      if(this.logoArrLength.length > 2) {
        this.logoArrLength.shift();
      }
      // getting rid of the previous logos
      if(this.logoArrLength.length > 1) {
        if(this.logoArrLength[1] > this.logoArrLength[0]) {
          this.currentLength = this.logoArrLength[1] - this.logoArrLength[0];
          this.logoArrLength[1] = this.currentLength; 
          this.logos.splice(0, this.logoArrLength[0]);
        }
      }
      console.log(this.logos);
      // altering logos
      if(this.logos.length == 4 || this.logos.length == 7) {
        this.bsSpan.nativeElement.style.display = 'inline-block';
        this.ngSpan.nativeElement.style.display = 'none';
      } else if(this.logos.length == 5 || this.logos.length == 8) {
        this.bsSpan.nativeElement.style.display = 'inline-block';
        this.ngSpan.nativeElement.style.display = 'inline-block';
      } else {
        this.bsSpan.nativeElement.style.display = 'none';
        this.ngSpan.nativeElement.style.display = 'none';
      }
    
    
  }

}
