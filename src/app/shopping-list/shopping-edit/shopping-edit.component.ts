import { ShoppingListService } from './../shopping.service';
import { Information } from './../../common/info.model';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameInput') nameInputRef: ElementRef;
 @ViewChild('quantityInput') quantityInputRef: ElementRef;
// @Output() infoAdded = new EventEmitter<Information>();
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }
  onAddItem() {
    const infoName = this.nameInputRef.nativeElement.value;
    const infoQuantity = this.quantityInputRef.nativeElement.value;
    const newInfo = new Information(infoName, infoQuantity);
    this.slService.addInfo(newInfo);
   // this.infoAdded.emit(newInfo);
  }

}
