import { CommentDTO } from './../models/comment.dto';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css'],
})
export class AllCommentsComponent implements OnInit {
  // @Input() comment: CommentDTO;
  public comments: CommentDTO[] = [];
  public haveComments = false;

  constructor() {}

  ngOnInit() {}

  addComment(newComment: CommentDTO) {
    this.comments.push(newComment);
  }

  removeComment(commentToRemove: CommentDTO) {
    this.comments.splice(this.comments.indexOf(commentToRemove), 1);
  }
}
