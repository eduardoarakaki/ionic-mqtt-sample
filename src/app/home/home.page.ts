import { Component, OnInit } from '@angular/core';
import { NgxMqttLiteService } from 'ngx-mqtt-lite';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private mqttService: NgxMqttLiteService) {}

  ngOnInit() {
    this.mqttService.initializa('test.mosquitto.org', {
    });
    this.mqttService.scope().subscribe(client => {
      client.subscribe('#');
    });
    this.mqttService.listen('message').subscribe(data => {
      console.log(data[1].toString());
    });
  }
}
