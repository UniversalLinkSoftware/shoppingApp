import { Directive, HostListener, HostBinding , ElementRef } from '@angular/core';

@Directive({
selector: '[appDropDown]'
})
export class DropDownDirective {
@HostBinding('class.show') isOpen = false;
constructor(private elRef: ElementRef) {

}
@HostListener('click') toogleOpen() {
            this.isOpen = !this.isOpen;
            this.elRef.nativeElement.querySelector('.dropdown-menu').classList.toggle('show');
        }


// @HostListener('click') toggleOpen() {
//     this.isOpen = !this.isOpen ;
//     this._el.nativeElement.querySelector('.dropdown-menu').classList.add('show');
// }
// @HostListener('document:click', ['$event.target']) close (targetElement) {
//     const inside: boolean = this._el.nativeElement.contains(targetElement);
//     if (!inside) {
//         this.isOpen = false;
//         this._el.nativeElement.querySelector('.dropdown-menu').classList.remove('show');
//     }

// }
}
