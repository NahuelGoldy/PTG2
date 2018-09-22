import {Post} from './post';
export class Person {
    name: string;
    img: string;
    rating: number;
    Description: string;
    Likes: string[];
    Dislikes: string[];
    messages: Post[];
    hide: boolean;
}
