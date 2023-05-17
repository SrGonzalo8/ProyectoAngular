import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../servicios/api.service';
import { Group } from '../../formulario/models/group.interface';

@Component({
  selector: 'app-userstbl',
  templateUrl: './userstbl.component.html',
  styleUrls: ['./userstbl.component.sass'],
})
export class UserstblComponent implements OnInit {
  data: any[] = [];
 // groups: Group[] = [];

  constructor(private ApiService: ApiService) {}

  ngOnInit(): void {
    this.loadUser();
    //this.loadGroups();
  }
  loadUser() {
    this.ApiService.getUsers().subscribe((data) => {
      this.data = data;
    });
  }
  deleteUser(id: number, index: number) {
    this.ApiService.deleteUser(id).subscribe((response) => {
      this.data.splice(index, 1);
    });
  }
  // loadGroups() {
  //   this.ApiService.getGroups().subscribe((groups) => {
  //     this.groups = groups;
  //   });
  // }
  // assignGroupToUser(user: any) {
  //   this.ApiService.addUserToGroup(user.groupId, user.id).subscribe(() => {
  //     console.log('Usuario asignado al grupo correctamente');
  //   });
  // }
}
