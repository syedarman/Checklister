import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from 'angularx-social-login'; 
import { SharedServiceService } from '../services/shared-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  socialUser!: SocialUser;
  isLoggedin?: boolean = false;

  constructor(private router: Router, 
    private socialAuthService: SocialAuthService,
    private sharedService: SharedServiceService) { }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
      console.log(this.socialUser);
    });
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
    .then((value) =>{
      console.log('Logged in successfully ', this.socialUser.email);
      this.sharedService.emailId = this.socialUser.email;
      this.sharedService.firstName = this.socialUser.firstName;
      this.sharedService.lastName = this.socialUser.lastName;
      this.router.navigateByUrl('/create-list');
    })
    .catch((error)=>{
      console.log('Loggin failed');
    });
  }
  logOut(): void {
    this.socialAuthService.signOut();
  }

}
