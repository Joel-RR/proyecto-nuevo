import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
const config: SocketIoConfig = 
{
  url:environment.wsUrl, options:{}
};

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
