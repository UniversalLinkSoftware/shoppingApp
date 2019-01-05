import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../common/data-storage.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
//  @Output() featureSelected = new EventEmitter<string>();
//   onSelect(feature: string) {
// this.featureSelected.emit(feature);
//   }
  constructor(private dataStorageService: DataStorageService) { }
  onSaveData() {
    this.dataStorageService.storeProducts().subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    console.log(this.dataStorageService.getProducts());
  }

  ngOnInit() {
  }

}
