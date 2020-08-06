import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  // permet d'associer une propriete de l'element qui va etre taguer (exp:style)
  @HostBinding('style.backgroundColor') bg = '';

  constructor() {
  }

  // ecouteur sur l elemnt: quand est ce que executer la directive (mouseenter,mouseenter)
  @HostListener('mouseenter') mouseenter() {
    this.bg = 'yellow';
  }

  @HostListener('mouseleave') mouseleave() {
    this.bg = 'red';
  }
}
