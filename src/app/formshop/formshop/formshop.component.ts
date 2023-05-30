import { Component } from '@angular/core';
import { Product } from '../../formulario/models/product.interface';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-formshop',
  templateUrl: './formshop.component.html',
  styleUrls: ['./formshop.component.sass'],
})
export class FormshopComponent {
  product = {
    productname: '',
    description: '',
    creationdate: '',
  };

  constructor(private http: HttpClient) {}

  fileList: NzUploadFile[];

  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  };

  procesar() {
    const newProduct: Product = {
      id: 0,
      productname: this.product.productname,
      description: this.product.description,
      creationdate: this.product.creationdate,
    };
    const formData = new FormData();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.fileList.forEach((file: any) => {
      formData.append('files[]', file);
    });
    formData.append('productname', this.product.productname);
    formData.append('description', this.product.description);
    formData.append('creationdate', this.product.creationdate);
    // You can use any AJAX library you like
    const req = new HttpRequest('POST', 'https://localhost:3000/', formData, {
      // reportProgress: true
    });
    this.http
      .request(req)
      .pipe(filter((e) => e instanceof HttpResponse))
      .subscribe({
        next: () => {
          this.fileList = [];
        },
      });
  }

  capturarFile(event: any) {
    console.log(event);
    console.log(this.fileList);
  }
}
