import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { CompanyTableElement } from '../shared/company-table-element'
declare var $: any;
@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements AfterViewInit {

  @Input() title: string;
  @Input() selecteditem: CompanyTableElement;
  @Output() addNewElement: EventEmitter<CompanyTableElement> = new EventEmitter<CompanyTableElement>();
  @Output() deleteElement: EventEmitter<CompanyTableElement> = new EventEmitter<CompanyTableElement>();
  @Output() saveElement: EventEmitter<CompanyTableElement> = new EventEmitter<CompanyTableElement>();
  constructor() { }

  ngAfterViewInit() {
    $('.dropify').dropify({
      messages: {
        'default': 'Drag and drop a file here or click',
        'replace': 'Drag and drop or click to replace',
        'remove': 'Remove',
        'error': 'Ooops, something wrong appended.'
      },
      error: {
        'fileSize': 'The file size is too big (1M max).'
      }
    });
    //console.log(this.selecteditem.Id);
  }



  onSubmit(value: CompanyTableElement) {
    console.log(value);
    this.addNewElement.emit(value);
    console.log("submit");
  }
  onDelete() {
    this.deleteElement.emit(this.selecteditem);
  }
  onSave(value: CompanyTableElement) {
    console.log(value);
    this.saveElement.emit(value);
    console.log("save");
  }


}
