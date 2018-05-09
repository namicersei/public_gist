import {Component, Input, OnInit} from '@angular/core';

import {Gist} from '../../gist';

@Component({
  selector: 'app-gist-list-item',
  templateUrl: './gist-list-item.component.html',
  styleUrls: ['./gist-list-item.component.css']
})
export class GistListItemComponent implements OnInit {

  @Input() data: Gist;

  constructor() {
  }

  ngOnInit() {
  }
  //it oepns the gist url in a new window.
  openGist() {
    window.open(this.data.html_url);
  }

}

