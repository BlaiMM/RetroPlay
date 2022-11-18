import { Component, OnInit } from '@angular/core';
import { File } from '@awesome-cordova-plugins/file/ngx';

@Component({
  selector: 'app-ventaconsola',
  templateUrl: './ventaconsola.page.html',
  styleUrls: ['./ventaconsola.page.scss'],
})
export class VentaconsolaPage implements OnInit {

  constructor(private file: File) { }

  
  ngOnInit() {
  }

  buscaArchiu(){
    
  this.file.checkDir(this.file.dataDirectory, 'mydir').then(_ => console.log('Directory exists')).catch(err =>
  console.log('Directory doesnt exist'));
  }
}

