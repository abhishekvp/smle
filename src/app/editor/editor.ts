import { Component, Injectable, OnInit } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';
import { AbstractProcess, SimpleProcess } from '../model/sml';
import { DescriptionRepository } from '../services/DescriptionRepository';

@Component({
  selector: 'editor',
  template: `
  {{diagnostic}}
  <h2>Description</h2>
  <ul>
    <code>{{description | json}}</code>
  </ul>
  `
})
@Injectable()
export class Editor implements OnInit {
  description: AbstractProcess;
  private _id: string;

  constructor(
    private _service: DescriptionRepository,
    routeParams: RouteParams) {
    this._id = routeParams.get('id');
  }

  ngOnInit(): void {
    if (this._id === 'new') {
      this.description = new SimpleProcess();
    } else {
      this._service.getDescription(this._id)
        .then(description => this.description = description);
    }
  }
}
