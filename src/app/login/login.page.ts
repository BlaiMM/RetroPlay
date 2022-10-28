import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router'



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
 

  formEmail= new FormGroup({
    email: new FormControl('')
  });
  navCtrl: any;
  

  constructor(private router:Router ) { }

  ngOnInit() {
  }
  registre(){
    this.router.navigate(['/register']);
  }

  
  

}
