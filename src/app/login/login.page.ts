import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router'
import { ServeisDadesService } from '../services/serveis-dades.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  
 
  public loginForm: FormGroup;
  
  //formEmail= new FormGroup({ 
    //email: new FormControl('')
  //});
  navCtrl: any;
  
  constructor(private router:Router, private serveiDades : ServeisDadesService, public formBuilder: FormBuilder ) { 

    this.loginForm = formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  ngOnInit() {
  }
  registre(){
    this.router.navigate(['/register']);
  }

  FesLogin(){
    this.serveiDades.FesLogin(this.loginForm.value.username,this.loginForm.value.password).subscribe((Response) => {
      console.log(Response);
      //cal mirar si esta bé o no 
      //fer redirect a register si no es correcte el login
      //this.router.navigate(['/home']);
    });
  }

  
  

}
