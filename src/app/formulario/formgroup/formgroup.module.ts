import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormgroupComponent } from './formgroup.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  declarations: [FormgroupComponent],
  exports: [FormgroupComponent],
})
export class FormgroupModule {}
