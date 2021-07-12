import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';

@Component({
    selector: 'app-blog',
    templateUrl: 'blog.component.html',
    styleUrls: [`blog.component.css`]
})

export class BlogComponent implements OnInit {
    blogs: any;
    
    ngOnInit() {

    }

    constructor(private _blogService: BlogService) {
        this.blogs = _blogService.getBlog();

        //input is glitchy
    }

}