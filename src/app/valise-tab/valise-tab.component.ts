import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { valiseItem } from '../models/valiseItem';

@Component({
  selector: 'app-valise-tab',
  templateUrl: './valise-tab.component.html',
  styleUrls: ['./valise-tab.component.css']
})
export class ValiseTabComponent implements OnInit, OnChanges {
  @Input() valiseName: string;
  @Input() valiseContent: Array<valiseItem>;
  @Input() activeTabName: string;

  @Output() checkItemEmit = new EventEmitter();
  @Output() deleteItemEmit = new EventEmitter();

  constructor() { }

  ngOnChanges(): void {
  }

  ngOnInit(): void {
  }

  public checkItem(id, place){
    this.checkItemEmit.emit({id: id, place: place})
  }

  public deleteItem(id, place){
    this.deleteItemEmit.emit({id: id, place: place})
  }
}
