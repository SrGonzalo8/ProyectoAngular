import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { User } from '../formulario/models/user.interface';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
})
export class UpdateComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private router: Router,
    private routeActivated: ActivatedRoute
  ) {}

  user!: User;
  errorMsg!: string;

  ngOnInit(): void {
    const userId = this.routeActivated.snapshot.params['userId'];
    this.apiService.getUser(userId).subscribe((data: User) => {
      this.user = data; // Asigna los datos del usuario obtenidos al objeto user
    });
  }

  procesarUpdate() {
    this.apiService.updateUser(this.user).subscribe({
      next: () => {
        this.router.navigate(['userstbl']);
      },
      error: (err) => {
        this.errorMsg = err.error.message;
      },
    });
  }
}
