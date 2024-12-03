import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export class Skill {
    image: IconDefinition;
    title: string;
    text: string;

    constructor(image:any, title:string, text:string){
        this.image = image;
        this.title = title;
        this.text = text;
    }
}