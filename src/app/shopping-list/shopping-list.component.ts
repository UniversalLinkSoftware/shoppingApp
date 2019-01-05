import { Information } from './../common/info.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingListService } from './shopping.service';
import { Subscription, Subject } from 'rxjs';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  infos: Information[];
  private subscription: Subscription;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
this.infos = this.slService.getInformation();
this.subscription = this.slService.infoChanged.subscribe(
  (info: Information[]) => {this.infos = info; }
  );
  // onInfoAdded(info: Information) {
  //   this.infos.push(info);

 // }
  }
  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
