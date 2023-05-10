import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-userstbl',
  templateUrl: './userstbl.component.html',
  styleUrls: ['./userstbl.component.sass'],
})
export class UserstblComponent implements OnInit {
  data: any[] = [];

  constructor(private ApiService: ApiService) {}

  ngOnInit(): void {
    this.loadUser();
  }
  loadUser() {
    this.ApiService.getUser().subscribe((data) => {
      this.data = data;
      console.log(this.data); //borrarlo cuando termine
    });
  }
  deleteUser(id: number, index: number) {
    this.ApiService.deleteUser(id).subscribe((response) => {
      this.data.splice(index, 1);
    });
  }
}
