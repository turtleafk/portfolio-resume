export class Project {
    constructor(
        public title: string, 
        public imagePath: string, 
        public siteUrl: string, 
        public data: {detailUn: string, detailDeux: string, detailTrois: string},
        public langLogos: string[]) {}
}