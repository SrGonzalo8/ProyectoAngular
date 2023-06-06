import { Component } from '@angular/core';
import { Product } from '../../formulario/models/product.interface';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { filter } from 'rxjs/operators';
import { ApiService } from '../../../servicios/api.service';

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
    state: 'active',
  };

  productIds: number[];
  listOfProducts: Product[] = [];

  constructor(
    private http: HttpClient,
    private apiService: ApiService,
    private router: Router
  ) {}

  file: any;

  beforeUpload = (file: NzUploadFile): boolean => {
    this.file = file;
    debugger;
    return true;
  };

  procesar() {
    debugger;
    const newProduct: Product = {
      productname: this.product.productname,
      description: this.product.description,
      creationdate: this.product.creationdate,
      state: this.product.state,
    };

    const formData = new FormData();

    formData.append('productname', this.product.productname);
    formData.append('description', this.product.description);
    formData.append('creationdate', this.product.creationdate);
    formData.append('state', this.product.state);
    if (this.file) {
      formData.append('image', this.file);
    }

    // You can use any AJAX library you like
    const req = new HttpRequest(
      'POST',
      'http://localhost:3000/product',
      formData,
      {
        // reportProgress: true
      }
    );
    this.http
      .request(req)
      .pipe(filter((e) => e instanceof HttpResponse))
      .subscribe({
        next: () => {
          console.log('creado!');
        },
      });
  }

  capturarFile(event: any) {
    console.log(event);
  }
}
