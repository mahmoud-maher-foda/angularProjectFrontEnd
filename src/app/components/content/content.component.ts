import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  ngOnInit(): void {
    this.myEvent.emit(this.ContentData);
  }
  ContentData:string="data from content";
  @Output() myEvent=new EventEmitter();
  sendData(){
    this.myEvent.emit(this.ContentData);
  }
}
