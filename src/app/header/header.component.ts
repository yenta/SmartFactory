import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  childTitle:string;
  constructor() { }

  ngOnInit() {

  }
    onClickCompanies(): void {
    this.childTitle='Company Detail';
  }
      onClickAddCompany(): void {
    this.childTitle='Add New Company';
  }
    onClickEmployee(): void {
    this.childTitle = 'Employee Detail';
  }
      onClickAddEmployee(): void {
    this.childTitle = 'Add New Employee';
  }
  
}
