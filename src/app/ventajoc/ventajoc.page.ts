import { File } from '@awesome-cordova-plugins/file/ngx';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ventajoc',
  templateUrl: './ventajoc.page.html',
  styleUrls: ['./ventajoc.page.scss'],
})
export class VentajocPage implements OnInit {

  constructor(private file: File) { }

  
  ngOnInit() {
    console.log("Poroa");
  }

  buscaArchiu(){
    
  this.file.checkDir(this.file.dataDirectory, 'mydir').then(_ => console.log('Directory exists')).catch(err =>
  console.log('Directory doesnt exist'));
  }
}
