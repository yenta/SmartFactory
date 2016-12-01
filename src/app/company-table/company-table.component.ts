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
  myHero: CompanyTableElement;


  @Input() title: string;

  public List: CompanyTableElement[];

  constructor(private _companyService: CompanyService) { this.getCompanyTableElement(); }
  ngOnInit() {
    console.log("Init");
  }
  ngAfterViewInit() {
    console.log("ngAfterView");
  }
  ngAfterViewChecked() {
    //console.log("ngAfterViewChecked");
    $('#datatable-responsive').DataTable();
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
    
    this.List.splice(index,1);
    this._companyService.deleteCompanyTableElement(item.Id)
      .subscribe(
      message => alert("Delete "+message),
      error => alert(error),
      () => this.List.splice(index, 1)
      )
  }
  SaveTableElement(item: CompanyTableElement): void {

    item.Id = this.selectedCompany.Id;
    var index = this.List.indexOf(this.selectedCompany);

    this.List.splice(index,1,item);
    this._companyService.saveCompanyTableElement(item)
      .subscribe(
      message => alert("Save " + message),
      error => alert(error),
      () => this.List.splice(index, 1, item)
      )
  }

  onRefresh() {
    //this.List=this._companyService.getAnotherCompanyTableElement();
    // this._companyService.deleteCompanyTableElement()
    //   .subscribe(
    //   data => alert(data),
    //   error => alert(error),
    //   () => console.log("Finished"));
    $('#datatable-responsive').DataTable();
  }
  onSelectionChange(CompanyTableElement) {
    this.selectedCompany = CompanyTableElement;
  }

}
