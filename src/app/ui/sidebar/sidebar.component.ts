import {Component, Input} from '@angular/core';
import {Person} from '../../shared/domain/person';
import {PeopleService} from '../../shared/services/people.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() people: Person[];
  typed: string;

  isActive = false;

  constructor(private peopleService: PeopleService) {
    this.typed = '';
  }

  personSelected(person: Person) {
    this.peopleService.setSelectedPerson(person);

    // toggle sidebar
    const dom: any = document.querySelector('body');
    dom.classList.toggle('push-right');
  }

  inputChanged() {
    this.people.forEach(p => {
        if(this.typed !== '' && p.name.toLowerCase().search(this.typed) === -1) {
          p.hide = true;
        } else {
          p.hide = false;
        }
    });
  }
}
