import { Information } from '../common/info.model';

export class Product {
public name: string;
public description: string;
public imagePath: string;
public info: Information[];

constructor(name: string, desc: string, imagePath: string, info: Information[]) {
this.name = name;
this.description = desc;
this.imagePath = imagePath;
this.info = info;
}

}
