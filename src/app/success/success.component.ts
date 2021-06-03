import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  templateUrl: './success.component.html'
})
export class SuccessComponent {

  private tokenTimer: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {title: string, message: string}){}

  onClose(){
    window.location.reload();
  }

  private setAuthTimer(duration: number, func: any) {
    this.tokenTimer = setTimeout(() => {
      func();
    }, duration * 1000);
    // console.log('Setting timer alert message: ' + duration);
  }

}
