import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
    selector: '[color]'
})
export class ColorDirective {
    // w przyp. dyrektyw domyslna wartosc jest nadpisywana pusta wartoscia
    // w przyp. komponentow, wszystko dziala zgodnie z oczekiwaniami
    @Input() color;

    constructor(public element: ElementRef) {
        // element to "host", element goszczacy nasza dyrektywe
    }

    ngOnInit() {
        // tutaj mozemy bezpiecznie skorzystac z Input/-ow
        this.element.nativeElement.style.color = this.color ? this.color : 'black';
    }

}
