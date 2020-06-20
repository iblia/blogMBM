import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../posts.service';


@Component({
    selector: 'mbm-post-form',
    templateUrl: './post-form.component.html'
})
export class PostFormComponent implements OnInit {

    postForm: FormGroup;

    showErrors: boolean = false;


    constructor(public formBuilder: FormBuilder, public postService: PostsService) {}

    ngOnInit() {
        // definiujemy formularz
        this.postForm = this.formBuilder.group({
            title: [ '', Validators.minLength(3) ],
            text: [ '', Validators.minLength(3) ]
        });
    }


    save() {
        if (this.postForm.valid) {
            const formValue = this.postForm.getRawValue();
            console.log(formValue);

            // zapisujemy post do serwera
            this.postService.savePost(formValue)
                .then(success => console.info(success))
                .catch(failure => console.error(failure));
        } else {
            this.showErrors = true;
            console.log('Formularz zawiera błędy.');
        }
    }

}
