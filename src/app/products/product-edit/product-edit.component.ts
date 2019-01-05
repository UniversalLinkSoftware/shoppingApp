import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  id: number;
  editMode = false;
  productForm: FormGroup;

  constructor(private route: ActivatedRoute, private productService: ProductService , private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }
  onAddInfo() {
    (<FormArray>this.productForm.get('info')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onDeleteInfo(index: number) {
    (<FormArray>this.productForm.get('info')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  onSubmit() {
    if (this.editMode) {
      this.productService.updateProduct(this.id, this.productForm.value);
    } else {
      this.productService.addProduct(this.productForm.value);
      console.log(this.productForm.value);
    }
    this.onCancel();
  }

  private initForm() {
    let productName = '';
    let productImagePath = '';
    let productDescription = '';
    // tslint:disable-next-line:prefer-const
    let productInfo = new FormArray([]);

    if (this.editMode) {
      const product = this.productService.getProduct(this.id);
      productName = product.name;
      productImagePath = product.imagePath;
      productDescription = product.description;
      if (product['info']) {
        // tslint:disable-next-line:prefer-const
        for (let information of product.info) {
          productInfo.push(
            new FormGroup({
              'name': new FormControl(information.name, Validators.required),
              'amount': new FormControl(information.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }

    this.productForm = new FormGroup({
      'name': new FormControl(productName, Validators.required),
      'imagePath': new FormControl(productImagePath, Validators.required),
      'description': new FormControl(productDescription, Validators.required),
      'info': productInfo
    });
  }

}
