import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { UsrlsgroupComponent } from './usrlsgroup.component';
import { NzListModule } from 'ng-zorro-antd/list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NzAlertModule,
    NzSelectModule,
    NzListModule,
  ],
})
export class UsrlsgroupModule {}
