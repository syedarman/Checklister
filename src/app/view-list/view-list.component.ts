import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../services/shared-service.service';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {

  listContent:any = [];
  constructor(private sharedService: SharedServiceService) { }

  ngOnInit(): void {
    this.listContent = this.sharedService.myList;
    console.log('content from view list : ',this.listContent);
  }

  onCheckboxClick(event: any){
    console.log('Checked Value: ', event.target.value);
  }

}
