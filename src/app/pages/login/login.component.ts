import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombre = '';
  color='';
  constructor(
    public wsService: WebsocketService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ingresar(){
<<<<<<< HEAD
    this.wsService.loginWS(this.nombre,this.color)
=======
    this.wsService.loginWS(this.nombre)
>>>>>>> d5072992bd1755d4e11c225d6c84e140038a8b09
    .then(()=>{
      this.router.navigateByUrl('/mensajes');
    });
  }
}
