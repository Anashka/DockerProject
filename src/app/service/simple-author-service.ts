import {Author} from './author';  
import {AuthorService} from './author-service'; 


export class SimpleAuthorService implements AuthorService{

    private authors:Author[];
    static serviceCount=0;
    private serviceId;
    
    constructor() {
        this.serviceId=++SimpleAuthorService.serviceCount;
        console.log(`SimpleAuthorService created with id ${this.serviceId}`);

        this.authors=this.authors=[
            {
              "id": "vivek",
              "name": "Vivek Dutta Mishra",
              "biography": "Author of the book 'The Accursed God' -The epic tale of Mahabharata searching if it was just a family fued as you were made to believe or it was the first world war? Follow through the first book of The Lost Epic Series",
               "email" : "vivekdutta@gmail.com"           
            },
            {
             "id": "khandekkar",
              "name": "V.S Khandekkar",
              "biography": "Author of the book 'yayathi",
              "email": "khandekkar@gmail.com",

            },
          
          ];
        
    }

    addAuthor(authors: Author): boolean {
        if(authors && authors.name && authors.biography && authors.email){
            this.authors.push(authors);
            return true;
        } else{
            return false;
        }
    }
    
    getAuthors(): Author[] {
        return  this.authors;
    }
    
    getAuthor(id: string): Author {
        return this.authors.find(a=>a.id==id);
    }

}
