import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router'
import { ServeisDadesService } from '../services/serveis-dades.service';



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
  

  constructor(private router:Router, private serveiDades : ServeisDadesService ) { }

  ngOnInit() {
  }
  registre(){
    this.router.navigate(['/register']);
  }

  FesLogin(){
    this.serveiDades.FesLogin().subscribe((Response) => {
      console.log(Response);
      //cal mirar si esta bé o no 
      //fer redirect a register si no es correcte el login
      //this.router.navigate(['/home']);
    });
  }

  
  

}
