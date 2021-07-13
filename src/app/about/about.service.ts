import { Injectable } from '@angular/core';
import { Exp } from './models/exp.model';
import { Skills } from './models/skill.model';
import { Cert } from './models/certs.model';

@Injectable()

export class AboutService {
    data: Exp[];
    skills: Skills[];
    certs: Cert[];

    constructor() {
        // model setup for the experience model
        this.data = [
            new Exp(
                ['/assets/images/prov-1.png', '/assets/images/prov-2.png', '/assets/images/prov-3.png'],
                'https://prov-3ac54.firebaseapp.com/',
                'Website',
                ' design for providom financial advice organization',
                'Providom non-profit Org',
                'Volunteer',
                'Web Design/UI Developer',
                '12/2020 - 01/2021',
                '- Created a design based on their brand',
                '- Worked with owner and strategists to plan the UI',
                '- The project is incomplete due to squarespace host'
            )
        ];

        // model setup for the skills model
        this.skills = [
            new Skills(
                'Front-End',
                [
                    '- HTML5 for accessibility and SEO', 
                    '- CSS3 for responsiveness', 
                    '- JS(ES6) for functioning Front-End and integrating with APIs', 
                    '- Angular for fast development, organization, and strict type-checking',
                    '- Bootstrap for rapid UI Design'    
                ],
                [
                    {
                        icon: 'f13b',
                        color: 'orange'
                    },
                    {
                        icon: 'f38b',
                        color: 'blue'
                    },
                    {
                        icon: 'f3b9',
                        color: 'yellow'
                    },
                    {
                        icon: 'f420',
                        color: 'red'
                    },
                    {
                        icon: 'f836',
                        color: 'purple'
                    }
                ]
            )
        ];

        // model for the cert model
        this.certs = [
            new Cert(
                'Responsive Web Design',
                'freeCodeCamp',
                'May 2020',
                'https://www.freecodecamp.org/certification/turtleshells/responsive-web-design'
            ),
            new Cert(
                'Javascript: Algorithms & Data Structures',
                'freeCodeCamp',
                'May 2020',
                'https://www.freecodecamp.org/certification/turtleshells/javascript-algorithms-and-data-structures'
            ),
            new Cert(
                'JavaScript: Build Real Projects',
                'Udemy',
                'Jan 2020',
                'https://www.udemy.com/certificate/UC-6c99801f-ff6b-413f-b348-3622eaa2f9ff/'
            )
        ];
    }

    getData() {
        return this.data;
    }

    getSkills() {
        return this.skills;
    }

    getCerts() {
        return this.certs;
    }
}