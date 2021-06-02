import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() public value = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onValueChange(data: any): void {
    this.value.emit(data);
}

}
