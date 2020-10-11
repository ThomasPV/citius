import { Directive, DoCheck, ElementRef,Input,Renderer2 } from '@angular/core';

@Directive({ selector: '[limitHighlighter]' })
export class LimitHighlighterDirective implements DoCheck {
  @Input() limitHighlighter;
  constructor(private eleRef: ElementRef, public renderer: Renderer2) {


  }
  ngDoCheck(): void {
    let valLength = this.eleRef.nativeElement.value.length;
         console.log("valLength "+ valLength );
    if(this.eleRef.nativeElement.value.length > 10){
      this.renderer.addClass(this.eleRef.nativeElement, 'input-danger');


    }else{
      this.renderer.removeClass(this.eleRef.nativeElement, 'input-danger');


    }
  }
}
