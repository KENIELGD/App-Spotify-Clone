import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgbroken]'
})
export class ImgbrokenDirective {

  constructor(private elHost: ElementRef) { }

  @HostListener("error") handleError():void{
    const elNative=this.elHost.nativeElement
    elNative.src="https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  }
}
