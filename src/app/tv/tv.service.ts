import { Injectable } from '@angular/core';
import { Video } from './tv.model';

@Injectable()

export class VideoService {
    videos: Video[];
    date = new Date();
    countDown: number;

    year: number;
    month: number;
    day: number;
    allDays: number[] = [];
    daysLastYear: number[] = [];
    calender: number[] = [];
    counterDays: number = 0;
    countHowLong: number = 0;
    monthsBehind: number = 0;
    monthCheck: number = 0;
    monthCheckTwo: number = -1;
    ago: number = 0;
    timeAgoArr: number[] = [];
    alteredArr: string[] = [];
    isLeapYear: boolean;
    monthArr: number[] = [];
    isUnder: boolean = false;
    reverseVids: {}[] = [];

    constructor() {
        this.year = this.date.getFullYear();
        this.month = this.date.getMonth() + 1;
        this.day = this.date.getDate();
        this.getDays(this.month + 1, this.allDays);
        this.getDays(13, this.daysLastYear);
        this.isLeapYear = this.year % 4 == 0;
        this.countDown = this.month;

        //making an array of all 12 months starting from current month number
        do {
            this.monthArr.unshift(this.countDown);
            this.countDown -= 1;
            if(this.countDown == 0) {
                this.countDown = 12;
            }
        } while(this.countDown != this.month)


        this.videos = [
            //insert the lastet videos here on top
            new Video(
                [
                    '/assets/images/sl-1.png',
                    '/assets/images/sl-2.png',
                    '/assets/images/sl-3.png',
                    '/assets/images/sl-4.png',
                    '/assets/images/sl-5.png'
                ],
                '/assets/vids/slide.mp4',
                '10:47',
                '1 month ago',
                2021,
                5,
                4,
                'Image Slideshow Tutorial',
                '05/04/2021'
            ),
            new Video(
                [
                    '/assets/images/b-1.png',
                    '/assets/images/b-2.png',
                    '/assets/images/b-3.png',
                    '/assets/images/b-4.png',
                    '/assets/images/b-5.png'
                ],
                '/assets/vids/burger.mp4',
                '08:35',
                '1 month ago',
                2021,
                4,
                13,
                'Burger Nav Tutorial',
                '04/13/2021'
            )
        ];

        this.findPositionInCalender();
        // altering the number arr to be a string
        this.alterArr(this.timeAgoArr);
        // setting the time in the video array
        this.setUploadTime();
        
    }

    // get the videos from the TS file
    getVideos() {
        return this.videos;
    }

    getVideosReverse() {
        this.reverseVids = [];
        this.videos.forEach(x => {
            this.reverseVids.unshift(x);
        });
        return this.reverseVids;
    }


    // getting all the days in a calender year
    getDays(x: number, array: number[]) {
        for(let y = 1; y < x; y++) {
            let date = new Date(this.year, y, 0).getDate();
            do {
                this.counterDays += 1;
                array.push(this.counterDays);
            } while(this.counterDays != date) 
            // for a leap year
            if(y == 2 && this.isLeapYear == true) {
                this.counterDays += 1;
                array.push(this.counterDays);
            }   
            this.counterDays = 0; 
        }
        // erasing all days past today on the calender
        if(array == this.allDays) {
            for(let z = this.allDays[this.allDays.length - 1]; z > this.day; z--) { 
                this.allDays.pop();
            }
        } else {
            // adding days in the calender, backing up to a year before from today
            this.daysLastYear.splice(0, this.allDays.length);
            this.calender = [...this.daysLastYear, ...this.allDays];
        }
    }

    // find the position of each video in the array
    // then the difference between that and the end of the array, will be the days ago
    findPositionInCalender() {
        for(let x = 0; x < this.videos.length; x++) {
            // going through each video and triggering this method
            this.countAlgorithm(this.videos[x].month, this.videos[x].year, this.videos[x].day, this.videos[x].when);
        }
    }

    reverse(x: number[], year: number, m: number, day: number, skip: boolean) {        
        // getting the difference from current and video month 
        this.monthsBehind = this.month - m;
        
        // if the years are the same
        if(year == this.year) {
            this.monthsBehind = this.month - m;
        }
        // if the years match
        if(year == this.year) {
            // if the month is greater than the current month
            if(this.monthsBehind < 0) {
                // do nothing, becauase that would be an error
                
            }

            // if the video was from last year
        } else if(year == (this.year - 1)) {
            // if the months are the same
            if(this.monthsBehind == 0) {
                if(this.day < day) {
                    this.monthsBehind = 12;
                } else {
                    this.monthsBehind = 13;
                    this.timeAgoArr.push(-1);
                }
                
                // if the video was from an earlier month...fix
            } else if(this.monthsBehind != 0) {
                if(this.monthsBehind > 0) {
                    this.monthsBehind = -1;
                    this.timeAgoArr.push(-1);

                    // if the video is from a later month from last year
                } else if(this.monthsBehind < 0) {
                    let hold = this.month - Math.abs(this.monthsBehind);
                    this.monthsBehind = this.month + hold;
                }
            }
            
            // if the video was from 2 or more years ago
        } else if(year < (this.year - 1)) {
            let hold;
            if(m > this.month || day > this.day) {
                hold = -Math.abs((this.year - year) - 1);
                this.monthsBehind = hold;
                if(m == this.month && day > this.day) {
                   this.isUnder = true; 
                }  
                
            }
            if((m < this.month || day < this.day) && this.isUnder == false) {
                hold = -Math.abs(this.year - year);
                this.monthsBehind = hold;
            }
            this.isUnder = false;
            this.timeAgoArr.push(this.monthsBehind);
        }

        if(this.monthsBehind <= 12 && this.monthsBehind >= 0) {
            for(let z = x.length - 1; z >= 0; z--) {
                
                // if the first value where days match is not to be skipped
                if(skip === false && x[z] == day) {
                    this.monthCheck += 1;
                    // compares the amount of times value has been seen by the month away

                    if(this.monthCheck == this.monthsBehind) {
                        this.ago = (x.length - 1) - z;
                        this.timeAgoArr.push(this.ago);
                        this.monthCheck = 0;
                        break;
                    }

                    // if the first value where days match is to be skipped
                } else if(skip === true && x[z] == day) {
                    this.monthCheckTwo += 1;

                    if(this.monthCheckTwo == this.monthsBehind) {
                        this.monthCheckTwo = -1;
                        this.ago = (x.length - 1) - z;
                        this.timeAgoArr.push(this.ago);
                        // put all value of the time ago uploaded in a array of numbers only, then change those values based on how long ago they were and update the DOm with them
                        break;
                    }
                }
                
            }
        }
        
    }

    countAlgorithm(months: any, year: number, day: any, when: any) {
        // use the difference to check how many times to skip over value if day is less or more
        if(this.day < day) {
            // moving backwards through the calender
            this.reverse(this.calender, year, months, day, false);
        } else {
            // moving backwards through the calender
            this.reverse(this.calender, year, months, day, true);
        }
        
    }

    alterArr(arr: number[]) {
        for(let i = 0; i < arr.length; i++) {
               this.getMonthsYears(arr[i]); 
        }
    }

    //check how many months or years are in the number
    getMonthsYears(x: number) {
        let value, multiples;
        //here we fix the values to months or days based on the algorithm

        if(x <= 365) {
            multiples = Math.floor(x / 29);
                if(multiples == 1) {
                    value = Math.floor(x / 29) + ' month ago';
                    this.alteredArr.push(value);
            
                } else if(multiples > 1) {
                    value = Math.floor(x / 29) + ' months ago';
                    this.alteredArr.push(value);
                
                    // if it is less than a month
                } else if(multiples == 0) {
                    if(x > 1) {
                        value = x + ' days ago';
                        this.alteredArr.push(value);
                    } else if(x == 1) {
                        value = x + ' day ago';
                        this.alteredArr.push(value);
                    } else {
                        value = 'today';
                        this.alteredArr.push(value);
                    }
                    
                } else {
                    if(x == -1) {
                        value = '1 year ago';
                        this.alteredArr.push(value);
                    } else {
                        value = Math.abs(x) + ' years ago';
                        this.alteredArr.push(value);
                    }
                }
            
        }
    }

    setUploadTime() {
        for(let i = 0; i < this.videos.length; i++) {
            this.videos[i].when = this.alteredArr[i];
        }
    }

}