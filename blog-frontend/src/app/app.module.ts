import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { TutorialContentComponent } from './tutorial-content/tutorial-content.component';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        BlogPostsComponent
    ],
    imports: [
        BrowserModule,
        TutorialContentComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }