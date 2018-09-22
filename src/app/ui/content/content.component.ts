import {Component, OnInit} from '@angular/core';
import {PeopleService} from '../../shared/services/people.service';
import {Post} from '../../shared/domain/post';
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  isDataAvailable = false;
  showMessageForm = false;
  messageInput: Post;
  btnText: string;

  constructor(public peopleService: PeopleService) {
    this.btnText = 'LEAVE A MESSAGE!';
    this.messageInput = new Post();
  }

  ngOnInit() {
    this.isDataAvailable = true;
  }

  counter(i: number) {
    return new Array(i);
  }

  toggleMessageFormFlag() {
    this.showMessageForm = !this.showMessageForm;
    this.btnText = (this.btnText === 'LEAVE A MESSAGE!') ? 'BACK TO PREFERENCES' : 'LEAVE A MESSAGE!';
  }

  submitMessage() {
    if(isNullOrUndefined(this.messageInput.author)) this.messageInput.author = 'Anonymus';
    this.messageInput.created_at = new Date().toISOString();
    this.peopleService.getSelectedPerson().messages.push(this.messageInput);
    this.messageInput = new Post();
  }
}
