import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';

@Component({
    selector: 'mbm-post-item',
    templateUrl: './post-item.component.html',
    styleUrls: ['./post-item.component.css']
})
export class PostItemComponent {
    @Input() post: Post;
    @Output() delete = new EventEmitter();

    onClick() {
        // emitujemy do rodzica informacje o tym, ze ten post ma byc usuniety
        this.delete.emit(this.post.id);
    }
}
