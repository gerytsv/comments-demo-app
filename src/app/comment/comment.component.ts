import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommentDTO } from '../models/comment.DTO';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  @Input() public comment: CommentDTO;
  @Output() public deleteComment: EventEmitter<CommentDTO> = new EventEmitter();
  public updatedComment;
  public show = false;
  public date;
  public type;

  constructor() {}

  ngOnInit() {
    this.updatedComment = this.comment.content;
    this.date = this.comment.createdOn;
    this.type = this.comment.type;
  }

  public toggleEditButton() {
    this.show = !this.show;
  }

  public updateComment() {
    this.comment.content = this.updatedComment;
  }

  public deleteCommentEmit() {
    this.deleteComment.emit(this.comment);
  }
}
