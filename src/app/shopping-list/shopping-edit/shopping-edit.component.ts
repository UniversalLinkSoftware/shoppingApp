import { ShoppingListService } from './../shopping.service';
import { Information } from './../../common/info.model';
import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
//  @ViewChild('nameInput') nameInputRef: ElementRef;
//  @ViewChild('quantityInput') quantityInputRef: ElementRef;
// @Output() infoAdded = new EventEmitter<Information>();
   @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Information;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.slService.getInfo(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            quantity: this.editedItem.amount
          });
        }
      );
  }
  // onAddItem() {
  //   const infoName = this.nameInputRef.nativeElement.value;
  //   const infoQuantity = this.quantityInputRef.nativeElement.value;
  //   const newInfo = new Information(infoName, infoQuantity);
  //   this.slService.addInfo(newInfo);
  //  // this.infoAdded.emit(newInfo);
  // }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newInfo = new Information(value.name, value.quantity);
    if (this.editMode) {
      this.slService.updateInfo(this.editedItemIndex, newInfo);
    } else {
      this.slService.addInfo(newInfo);
    }
    this.editMode = false;

  }
  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete() {
    this.slService.deleteInfo(this.editedItemIndex);
    this.onClear();
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
