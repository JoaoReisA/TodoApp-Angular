import { AfterViewInit, Directive, ElementRef, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import tippy  from 'tippy.js';
@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements AfterViewInit, OnChanges {

  @Input('appTooltip') tooltipContent: string ='' ;

  public tippyInstance: any;

  constructor(private elRef: ElementRef) { }


  ngOnChanges(changes: SimpleChanges){
    if(changes['tooltipContent']){
      this.updateTollTipContent();
    }
  }

  updateTollTipContent(){
if(this.tippyInstance){
  this.tippyInstance.setContent(this.tooltipContent)
}
  }

  ngAfterViewInit(){
    this.tippyInstance = tippy(this.elRef.nativeElement, {
      content: this.tooltipContent
    })
  }
}
