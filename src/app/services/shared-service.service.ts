import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  emailId: string = "";
  firstName: string = "";
  lastName: string = "";
  myList: any = [];

  isLoggedIn(){
    return this.emailId != null && this.emailId != "";
  }

  saveList(listContent:any){
    this.myList = listContent;
  }
}
