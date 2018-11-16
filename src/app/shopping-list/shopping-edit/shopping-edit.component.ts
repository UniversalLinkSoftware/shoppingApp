import { Information } from './../../common/info.model';
import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameInput') nameInputRef: ElementRef;
 @ViewChild('quantityInput') quantityInputRef: ElementRef;
 @Output() infoAdded = new EventEmitter<Information>();
  constructor() { }

  ngOnInit() {
  }
  onAddItem() {
    const infoName = this.nameInputRef.nativeElement.value;
    const infoQuantity = this.quantityInputRef.nativeElement.value;
    const newInfo = new Information(infoName, infoQuantity);
    this.infoAdded.emit(newInfo);
  }

}
