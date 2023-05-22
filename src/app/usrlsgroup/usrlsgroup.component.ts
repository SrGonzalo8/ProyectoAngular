import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../servicios/api.service';
import { User } from '../formulario/models/user.interface';

@Component({
  selector: 'app-usrlsgroup',
  templateUrl: './usrlsgroup.component.html',
  styleUrls: ['./usrlsgroup.component.sass']
})
export class UsrlsgroupComponent implements OnInit {
  groupId: number | undefined;
  users: User[] = [];

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.groupId = +params['groupId'];
      this.getUsersByGroup();
    });
  }

  getUsersByGroup() {
    this.apiService.getUsersByGroup(this.groupId).subscribe(users => {
      this.users = users;
    });
  }
}
