import { Injectable } from '@angular/core';
import { Project } from './project.model';

@Injectable()

export class ProjectService {
    projects: Project[];

    constructor() {
        this.projects = [
            new Project(
                'Naughty Dog Website', 
                'image-0',
                'https://naughtydog-695ce.firebaseapp.com/',
                {
                    detailUn: 'JS enabled cursor drag capability on photos', 
                    detailDeux: 'A website for one of my favorite video game makers', 
                    detailTrois: 'This is a static website responsive design'
                },
                ['\\f13b', '\\f38b', '\\f3b8']),
            
            new Project(
                'Budget App', 
                'image-1',
                'https://budget-app-ea94c.firebaseapp.com/',
                {
                    detailUn: 'Budgeting algorithm to increase or decrease budget', 
                    detailDeux: 'Designed to help sort out budgets', 
                    detailTrois: 'Deleted the code, planning to re-do it correctly'
                },
                ['\\f13b', '\\f38b', '\\f836', '\\f3b8']),

            new Project(
                'Recipe App', 
                'image-2',
                'https://recipe-fd72e.firebaseapp.com/',
                {
                    detailUn: 'Rest API to retreive the recipes', 
                    detailDeux: 'Servings algorithm to fix amounts based on servings', 
                    detailTrois: 'Algorithm to add/delete individual ingredients'
                },
                ['\\f13b', '\\f38b', '\\f836', '\\f3b8', '\\f420']),

            new Project(
                'Non-profit Finacial Org', 
                'image-3',
                'https://prov-3ac54.firebaseapp.com/',
                {
                    detailUn: 'Rest API to retrieve content from Instagram', 
                    detailDeux: 'Website is not complete/planning to finish soon', 
                    detailTrois: 'Buzzfeed quiz, scheduling API, and login auth'
                },
                ['\\f13b', '\\f38b', '\\f836', '\\f3b8', '\\f420'])
          ];
    }

    getProjects() {
        return this.projects;
    }
}