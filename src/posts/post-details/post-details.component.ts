import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post';


@Component({
    selector: 'mbm-post-details',
    templateUrl: './post-details.component.html'
})
export class PostDetailsComponent implements OnInit {
    // wartosc domyslna, na wypadek bledu w pobieraniu posta z serwera
    post: Post = {
                    title: '-',
                    text: '-'
                };

    constructor(public postService: PostsService,public activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        // fooBar/:id --> fooBar/25 --> { id: 25 }
        const postId = this.activatedRoute.snapshot.params.id;

        this.postService.fetchPost(postId)
            .then((post: Post) => {
                console.log(post);
                this.post = post;
            })
            .catch(error => {
                console.log(error);
            });
    }
}
