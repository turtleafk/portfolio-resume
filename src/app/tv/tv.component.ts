import { Component, ElementRef } from '@angular/core';
import { VideoService } from './tv.service';

@Component({
    selector: 'app-tv',
    templateUrl: './tv.component.html',
    styleUrls: [`./tv.component.css`],
    providers: [VideoService]
})

export class TvComponent {
    videos: any;
    choices: string[];
    date = new Date();
    counter: number = 1;
    mainPoster: string = '/assets/images/sl-1.png';
    mainSource: string = '/assets/vids/slide.mp4';
    title: string = 'Image Slideshow Tutorial';
    images: any;
    timer1: any;
    timer2: any;
    timer3: any;
    timer4: any;
    preTitle: string;
    length: number = 4;

    constructor(public _videoService: VideoService) {
        this.videos = this._videoService.getVideos();
        this.choices = ['recent', 'oldest'];
        this.preTitle = 'featured: ';
    }

    reorder() {
        this.counter++;
        // odd means oldest videos first, event means most recent
        if(this.counter % 2 == 0) {
            // if the counter is even then put the videos in reverse order
            this.videos = this._videoService.getVideosReverse();
        } else {
            // if the counter is odd then put the videos in regular order
            this.videos = this._videoService.getVideos();
        }
    }

    playVideo(event: any) {
        // comapre this value with title value in video array and select that video to be played
        let selected = event.target.nextSibling.innerText;
        // going throught the videos and checking to see if one matches the clicked title
        for(let i = 0; i < this.videos.length; i++) {
            // adding the selected video to the main watch area
            if(this.videos[i].title == selected && this.mainPoster != this.videos[i].poster) {
                this.mainPoster = this.videos[i].poster[0];
                this.mainSource = this.videos[i].src;
                this.title = selected;
            }
        }
        this.preTitle = 'now playing: ';
    }

    allImages(event: any) {
            if(event.sourceCapabilities.firesTouchEvents == false) {
                // getting the video title of image hovered over
                let hold = event.target.attributes[4].nodeValue; 

                // getting the image array of the image hovered over
                for(let z = 0; z < this.videos.length; z++) {
                    if(this.videos[z].poster[0] == hold) {
                        this.images = [];
                        this.images = this.videos[z].poster;
                    }
                }
                // triggering the sequence of images on hover
                this.timer4 = setTimeout(() => {
                    event.target.attributes[4].value = this.images[1];
                    this.timer1 = setTimeout(() => {
                        event.target.attributes[4].value = this.images[2];
                        this.timer2 = setTimeout(() => {
                            event.target.attributes[4].value = this.images[3];
                            this.timer3 = setTimeout(() => {
                                event.target.attributes[4].value = this.images[4];
                            }, 1150);
                        }, 1100);
                    }, 1050);
                }, 1000);
            }
    }

    // this method resets the orignal screenshot of the image when your not hovering over
    oneImage(event: any) {
        let hold = event.target.nextSibling.innerText;
        for(let i = 0; i < this.videos.length; i++) {
            if(this.videos[i].title == hold) {
                // clearing all the timeouts
                clearTimeout(this.timer4);
                clearTimeout(this.timer1);
                clearTimeout(this.timer2);
                clearTimeout(this.timer3);
                
                // setting the original image back once you hover out
                event.target.attributes[4].nodeValue = this.videos[i].poster[0];
              
            }
        }
        
    }

}