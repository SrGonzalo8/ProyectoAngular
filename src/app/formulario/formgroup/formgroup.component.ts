import { Component } from '@angular/core';
import { FormgroupModule } from './formgroup.module';
import { ApiService } from '../../../servicios/api.service';
import { Group } from '../models/group.interface';

@Component({
  selector: 'app-formgroup',
  templateUrl: './formgroup.component.html',
  styleUrls: ['./formgroup.component.sass'],
})
export class FormgroupComponent {
  group = {
    name: '',
  };
  constructor(private apiService: ApiService) {}

  groups: any[] = [];
  procesarGrupo() {
    const newGroup: Group = {
      name: this.group.name,
    };
    this.apiService
      .addGroup(newGroup)
      .subscribe((group) => this.groups.push(group));
  }
}
