import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';


@Injectable()
export class PostsService {
    url: string = 'http://localhost:3000/posts';

    constructor(public http: HttpClient) {}

    savePost(post: Post) {
        return this.http.post(this.url, post).toPromise();
    }

    fetchPosts(query: string) {
        // http://localhost:3000/posts -- pobiera wszystkie kanapki
        // http://localhost:3000/posts?q=ham -- pobiera wszystkie kanapki, ktore maja wartosc `ham`
        return this.http.get(`${this.url}?q=${query}`).toPromise();
    }

    fetchPost(postId) {
        // http://localhost:3000/posts/27 -- pobiera pojedyncza kanapke o id 27
        // return this.http.get(this.url + '/' + postId);
        return this.http.get(`${this.url}/${postId}`).toPromise();
    }

    deletePost(postId) {
        // usuwa z bazy kanapke o wybranym `id`
        return this.http.delete(`${this.url}/${postId}`).toPromise();
    }

}
