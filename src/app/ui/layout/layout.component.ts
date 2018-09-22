import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../shared/services/people.service';
import { Person } from '../../shared/domain/person';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isDataAvailable = false;

  constructor(public peopleService: PeopleService) {
    // async initialization of the service
    this.peopleService.initialize().subscribe((data: { People: Person[] }) => {
      data.People.forEach(p => {
        p.hide = false;
        p.messages = [];
      });
      this.peopleService.setPeople(data.People);
      this.peopleService.setSelectedPerson(data.People[0]);
      this.isDataAvailable = true;
    });
  }

  ngOnInit() {
  }

}
