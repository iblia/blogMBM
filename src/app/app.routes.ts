import { Route } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { OopsComponent } from '../oops/oops.component';
import { PostListComponent } from '../posts/post-list/post-list.component';
import { PostFormComponent } from '../posts/post-form/post-form.component';
import { PostDetailsComponent } from '../posts/post-details/post-details.component';
import { AboutComponent } from '../about/about.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from 'src/footer/footer.component';

export const appRoutes: Route[] = [
    { path: '', component: HomeComponent },
    { path: '', component: HeaderComponent },
    { path: '', component: FooterComponent },
    { path: 'about', component: AboutComponent},
    { path: 'post-list', component: PostListComponent },
    { path: 'post-list/:id', component: PostDetailsComponent },
    { path: 'create-post', component: PostFormComponent },
    { path: '**', component: OopsComponent }
];
