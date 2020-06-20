import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { HomeComponent } from '../home/home.component';
import { ColorDirective } from '../color/color.directive';
import { AppInfoService } from '../app-info/app-info.service';
import { HttpClientModule } from '@angular/common/http';
import { TitlePipe } from '../title/title.pipe';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { AboutComponent } from '../about/about.component';
import { OopsComponent } from '../oops/oops.component';
import { PostModule } from '../posts/post.module';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    PostModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    OopsComponent,
    FooterComponent,
    ColorDirective,
    TitlePipe
  ],
  providers: [AppInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
