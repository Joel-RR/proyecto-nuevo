import { Injectable } from '@angular/core';
import { Socket} from 'ngx-socket-io';
import { Usuario } from '../classes/usuario';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public socketStatus=false;
  public usuario!: Usuario;

  constructor(
    private socket: Socket
  ) {
    this.cargarStorage();
    this.checkStatus();
  }

  checkStatus(){
    this.socket.on('connect', () => {
      console.log('conectado al servidor');
      this.socketStatus = true;
    })

    this.socket.on('disconnect', () => {
      console.log('Desconectado del servidor');
      this.socketStatus = false;
    })
  }


  emit( evento: string, payload: any , callback?: Function){
    console.log('emitiendo mensaje');
    this.socket.emit(evento, payload, callback);
  }

  listen( evento: string){
    return this.socket.fromEvent( evento );
  }

<<<<<<< HEAD
  loginWS(nombre: string,color: string){

    return new Promise<void>( ( resolve, reject) => {
          //console.log('Configurando :', nombre);
     this.emit('configurar-usuario',{nombre, color}, (resp:Response) =>{
      //console.log(resp);

      this.usuario = new Usuario(nombre, color);
      this.guardarStorage();
      resolve();
=======
  loginWS(nombre: String){

    return new Promise( ( resolve, reject) => {
          //console.log('Configurando :', nombre);
     this.emit('configurar-usuario',{nombre}, (resp:Response) =>{
      //console.log(resp);
      resolve(Promise);
>>>>>>> d5072992bd1755d4e11c225d6c84e140038a8b09
     });
    }
     /*this.socket.emit('configurar-usuario', {nombre}, (resp: Response) =>
     {
      console.log(resp);
     });*/
  )}
<<<<<<< HEAD

  getUsuario(){
    return this.usuario;
  }

  guardarStorage(){
    localStorage.setItem('usuario', JSON.stringify(this.usuario));
  }

  cargarStorage(){
    if(localStorage.getItem('usuario'))
    {
      this.usuario = JSON.parse(localStorage.getItem('usuario')!);
    }
  }
=======
>>>>>>> d5072992bd1755d4e11c225d6c84e140038a8b09

}

