import { Type } from './../models/type';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css'],
})
export class CreateCommentComponent implements OnInit {
  public content = '';
  public type: Type = Type.low;
  public date;

  @Output() public bodyToSend: EventEmitter<{
    content: string;
    type: Type;
    createdOn: string;
  }> = new EventEmitter();

  constructor() {}

  public onSubmitButtonClick() {
    this.date = moment(new Date()).format('DD/MM/YY');
    this.bodyToSend.emit({
      content: this.content,
      type: this.type,
      createdOn: this.date,
    });
    this.content = '';
    this.type = Type.low;
  }

  ngOnInit() {}
}
