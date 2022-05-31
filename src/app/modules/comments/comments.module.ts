import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import {CommentService} from './services/comment.service';
import {HttpClientModule} from '@angular/common/http';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentDetailsComponent } from './components/comment-details/comment-details.component';
import { CommentComponent } from './components/comment/comment.component';


@NgModule({
  declarations: [CommentsComponent, CommentDetailsComponent, CommentComponent],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    HttpClientModule
  ],
  providers: [
    CommentService
  ]
})
export class CommentsModule { }
