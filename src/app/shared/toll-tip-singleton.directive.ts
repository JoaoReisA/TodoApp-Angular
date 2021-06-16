import {
  AfterViewInit,
  ContentChildren,
  Directive,
  QueryList,
} from '@angular/core';
import { createSingleton } from 'tippy.js';
import { TooltipDirective } from './tooltip.directive';

@Directive({
  selector: '[appTollTipSingleton]',
})
export class TollTipSingletonDirective implements AfterViewInit {
  @ContentChildren(TooltipDirective, { descendants: true })
  elementsWithTooltips!: QueryList<TooltipDirective>;


  singletonInstance: any;

  constructor() {}

  ngAfterViewInit() {
   this. singletonInstance = createSingleton(this.getTippyInstances(), {
      delay: [200, 0],
      moveTransition: 'transform 0.2s ease-out',
    });

    this.elementsWithTooltips.changes.subscribe(()=>{
      this.singletonInstance.setInstances(this.getTippyInstances())
    })
  }

  getTippyInstances() {
    return this.elementsWithTooltips.toArray().map((t) => {
      return t.tippyInstance;
    });
  }
}
