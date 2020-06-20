import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
    selector: 'wsb-post-list',
    templateUrl: './post-list.component.html'
})
export class PostListComponent implements OnInit {
    // tutaj trafi nasz Promise przechowujacy kanapki
    posts;

    query: string = '';
    
    constructor(public postService: PostsService) {}

    ngOnInit() {
        this.updateList();
    }

    onDelete(postId) { // `postId` to id usuwanej kanapki
        this.postService.deletePost(postId)
            .then(() => {
                // kanapka zostala usunieta z bazy danych
                // mozemy pobrac aktualna liste kanapek na nowo
                this.updateList();
            });
    }

    search(query) {
        // 1. aktualizujemy wartosc `query` (wyszukiwana fraza)
        this.query = query;
        // 2. aktualizujemy liste kanapek (wykonujemy zapytanie do json-server)
        this.updateList();
    }

    updateList() {
        // pobieramy liste wszystkich kanapek
        this.posts = this.postService.fetchPosts(this.query);
    }
}
