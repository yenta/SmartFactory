import { Component, OnInit, Input, AfterViewInit, AfterViewChecked } from '@angular/core';
import { CompanyTableElement } from '../shared/company-table-element';
import { CompanyService } from '../company.service';
declare var $: any;


@Component({
  selector: 'app-company-table',
  templateUrl: './company-table.component.html',
  providers: [CompanyService]
})

export class CompanyTableComponent implements AfterViewChecked {

  selectedCompany: CompanyTableElement = { Id: 0, Name: "", ShortName: "", ContactName: "", CompanyWebSite: "", ContactEmail: "", ContactPhone: "", Address: "", CultureInfoId: "", CultureInfoName: "", LogoURL: "", Latitude: 0, Longitude: 0 };

  @Input() title: string;

  public List: CompanyTableElement[];

  constructor(private _companyService: CompanyService) { this.getCompanyTableElement(); }
  ngOnInit() {
    
  }
  ngAfterViewInit() {
    
  }
  ngAfterViewChecked() {
    //console.log("ngAfterViewChecked");
    //$('#datatable-responsive').DataTable();
  }
  getCompanyTableElement(): void {
    this._companyService.getCompanyTableElement()
      .subscribe(
      List => this.List = List,
      error => alert(error),
      () => {
        console.log(this.List);

      }
      )
  }
  AddNewTableElement(message: CompanyTableElement): void {
    //find Max id in List and +1
    //message.Id = Math.max.apply(Math, this.List.map(function (item) { return item.Id; })) + 1;
    this._companyService.addNewCompanyTableElement(message)
      .subscribe(
      data => message.Id = data.id,
      error => alert(error),
      () => this.List.push(message)
      );

  }
  DeleteTableElement(item: CompanyTableElement): void {

    var index = this.List.indexOf(item);

    this.List.splice(index, 1);
    this._companyService.deleteCompanyTableElement(item.Id)
      .subscribe(
      message => alert("Delete " + message),
      error => alert(error),
      () => this.List.splice(index, 1)
      )
  }
  SaveTableElement(item: CompanyTableElement): void {

    item.Id = this.selectedCompany.Id;
    var index = this.List.indexOf(this.selectedCompany);

    this.List.splice(index, 1, item);
    this._companyService.saveCompanyTableElement(item)
      .subscribe(
      message => alert("Save " + message),
      error => alert(error),
      () => this.List.splice(index, 1, item)
      )
  }

  onRefresh() {

    var oTable = $('#datatable-responsive').DataTable();
    // oTable.clear();
    // for (var k = 0; k < this.List.length; k++) {
     
    //   oTable.row.add({"radio":"vv", "Name":"Cool","ShortName":"cc","ContactName":"dd","ContactPhone":"pp","ContactEmail":"hh","CultureInfoId":"xx"});
    // }
    oTable.draw();
    
    //$('#datatable-responsive').DataTable().clear().rows.add(this.List).draw();
  }
  onSelectionChange(CompanyTableElement) {
    this.selectedCompany = CompanyTableElement;
  }

}
