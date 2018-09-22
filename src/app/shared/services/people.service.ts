import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Person} from '../domain/person';

@Injectable()
export  class  PeopleService {

  private people: Person[] = [];
  private selectedPerson: Person;

  constructor(private httpClient:  HttpClient) {
  }

  getPeople() {
    return this.people;
  }

  setPeople(people: Person[]) {
    this.people.push(...people);
  }

  getSelectedPerson(): Person {
    return this.selectedPerson;
  }

  setSelectedPerson(person: Person) {
    this.selectedPerson = person;
  }

  initialize() {
    return this.httpClient.get('./assets/data/people.json');
  }
}
