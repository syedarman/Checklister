import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedServiceService } from '../services/shared-service.service';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {

  constructor(private formBuilder : FormBuilder,
     private sharedService: SharedServiceService,
     private router: Router){}

  ngOnInit(): void {
  }

  form = this.formBuilder.group({
    items :  this.formBuilder.array([this.getItem()], Validators.required)
  });
  
  items(){
    return this.form.get("items") as FormArray;
  }

  addItems(){
    this.form.controls.items.push(this.getItem());
  }

  getItem(){
    return this.formBuilder.group({
      name:[null, Validators.required],
      quantity:[null, Validators.required],
      unit:[null, Validators.required]
    })
  }

  saveItems(){
    console.log(this.form.value);
    this.sharedService.saveList(this.form.value);
    this.router.navigateByUrl('view-list')
  }

  removeItem(itemIndex : number){
    this.items().removeAt(itemIndex);
  } 

}
