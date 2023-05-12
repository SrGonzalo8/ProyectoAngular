import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../servicios/api.service';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-groupstbl',
  templateUrl: './groupstbl.component.html',
  styleUrls: ['./groupstbl.component.sass'],
})
export class GroupstblComponent implements OnInit {
  data: any[] = [];

  constructor(private ApiService: ApiService) {}

  ngOnInit(): void {
    this.loadGroup();
  }
  loadGroup() {
    this.ApiService.getGroups().subscribe((data) => {
      this.data = data;
      console.log(this.data); //borrarlo cuando termine
    });
  }
  deleteGroup(id: number, index: number) {
    this.ApiService.deleteGroup(id).subscribe((response) => {
      this.data.splice(index, 1);
    });
  }
}
