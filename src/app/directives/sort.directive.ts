import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Sort } from '../utils/sort';

@Directive({
  selector: '[appSort]'
})
export class SortDirective {
  @Input() appSort: Array<any>;

  constructor(private elementRef: ElementRef) {}

  @HostListener('click')
  sortData() {
    const sort = new Sort();
    const elem = this.elementRef.nativeElement;
    const order: string = elem.getAttribute('data-order');
    const property: string = elem.getAttribute('data-name');
    if (order === 'desc') {
      this.appSort.sort(sort.startSort(property, order));
      elem.setAttribute('data-order', 'asc');
    } else {
      this.appSort.sort(sort.startSort(property, order));
      elem.setAttribute('data-order', 'desc');
    }
    localStorage.setItem('account-data', JSON.stringify(this.appSort));
  }
}
