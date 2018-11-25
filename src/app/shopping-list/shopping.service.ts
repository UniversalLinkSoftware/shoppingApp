import { EventEmitter } from '@angular/core';
import { Information } from '../common/info.model';

export class ShoppingListService {
    infoChanged = new EventEmitter < Information[] >();
    private infos: Information[]  = [new Information('Adidas', 39), new Information('Nike', 40) ];

    getInformation() {
    return this.infos.slice();
    }
addInfo(info: Information) {
this.infos.push(info);
this.infoChanged.emit(this.infos.slice());
}
addInfos(informations: Information[]) {
    // for (let info of informations ) {
    //     this.addInfo(info);
    // }
    this.infos.push(...informations);
    this.infoChanged.emit(this.infos.slice());
}


}
