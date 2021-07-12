import { Injectable, OnInit } from '@angular/core';
import { Blog } from './blog.model';

@Injectable()
export class BlogService {
    blog: Blog[];

    constructor() {
        this.blog = [
            new Blog(
                '', 
                '', 
                '')
        ]
    }

    getBlog() {
        return this.blog;
    }
}