import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service';

@Component({
  selector: 'app-userstbl',
  templateUrl: './userstbl.component.html',
  styleUrls: ['./userstbl.component.sass'],
})
export class UserstblComponent implements OnInit {
  data: any[] = [];

  constructor(private ApiService: ApiService) {}

  ngOnInit(): void {
    this.llenarData();
  }
  llenarData() {
    this.ApiService.getData().subscribe((data) => {
      this.data = data;
      console.log(this.data); //solo sirve para comprobar que llega la lista de los usuarios se puede borrar
    });
  }

  // removeData(id: string) {
  //   this.ApiService.removeUser(id).subscribe(() =>{
  //     this.ApiService = this.ApiService.filter(users => users.id !== id)
  //   });
  // }
}
