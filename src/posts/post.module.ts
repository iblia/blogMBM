import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostFormComponent } from './post-form/post-form.component';
import { PostsService } from './posts.service';
import { PostListComponent } from './post-list/post-list.component';
import { PostItemComponent } from './post-item/post-item.component';
import { RouterModule } from '@angular/router';
import { PostDetailsComponent } from './post-details/post-details.component';


@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule
    ],
    declarations: [// <-- Component, Directive, Pipe
        PostFormComponent,
        PostListComponent,
        PostItemComponent,
        PostDetailsComponent
    ],
    providers: [// <-- Service (Injectable)
        PostsService
    ],
    exports: [
        PostFormComponent,
        PostListComponent,
        PostDetailsComponent
    ]
})
export class PostModule { }
