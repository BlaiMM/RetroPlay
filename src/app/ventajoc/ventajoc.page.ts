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
   
  }

  buscaArchiu(){
    //alert("prova");
  console.log('this.file.dataDirectory');
  this.file.checkDir(this.file.dataDirectory, 'mydir').then(res => console.log('Directory exists')).catch(err =>
  console.log('Directory doesnt exist'));
  }
}
