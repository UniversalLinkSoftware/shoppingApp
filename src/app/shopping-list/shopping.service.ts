
import { Information } from '../common/info.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    // infoChanged = new EventEmitter < Information[] >();
    infoChanged = new Subject < Information[] >();
    startedEditing = new Subject<number>();
    private infos: Information[]  = [new Information('Adidas', 39), new Information('Nike', 40) ];

    getInformation() {
    return this.infos.slice();
    }
    getInfo(index: number) {
        return this.infos[index];
      }
addInfo(info: Information) {
this.infos.push(info);
// this.infoChanged.emit(this.infos.slice());
this.infoChanged.next(this.infos.slice());
}
addInfos(informations: Information[]) {
    // for (let info of informations ) {
    //     this.addInfo(info);
    // }
    this.infos.push(...informations);
    // this.infoChanged.emit(this.infos.slice());
    this.infoChanged.next(this.infos.slice());
}

updateInfo(index: number, newInfo: Information) {
    this.infos[index] = newInfo;
    this.infoChanged.next(this.infos.slice());
  }

  deleteInfo(index: number) {
    this.infos.splice(index, 1);
    this.infoChanged.next(this.infos.slice());
  }


}
