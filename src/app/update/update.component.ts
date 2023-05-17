import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { User } from '../formulario/models/user.interface';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Group } from '../formulario/models/group.interface';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
})
export class UpdateComponent implements OnInit {
  constructor(
    private ApiService: ApiService,
    private router: Router,
    private routeActivated: ActivatedRoute
  ) {}


  user!: User;
  errorMsg!: string;
  groups: Group[] = [];

  ngOnInit(): void {
    const userId = this.routeActivated.snapshot.params['userId'];
    this.ApiService.getUser(userId).subscribe((data: User) => {
      this.user = data; // Asigna los datos del usuario obtenidos al objeto user
    });

    this.loadGroups();

  }
loadGroups() {
    this.ApiService.getGroups().subscribe((groups) => {
      this.groups = groups;
    });
  }
  assignGroupToUser(user: any) {
    this.ApiService.addUserToGroup(user.groupId, user.id).subscribe(() => {
      console.log('Usuario asignado al grupo correctamente');
    });
  }

  procesarUpdate() {
    this.ApiService.updateUser(this.user).subscribe({
      next: () => {
        this.router.navigate(['userstbl']);
      },
      error: (err) => {
        this.errorMsg = err.error.message;
      },
    });
  }
}
