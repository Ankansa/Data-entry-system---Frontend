import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    if (!navigator.geolocation) {
      console.log("Location is not supported")

    } else {

      navigator.geolocation.getCurrentPosition((position) => {
        console.log("Latitude is :", position.coords.latitude)
        console.log("Longitude is :", position.coords.longitude)

      })
    }
  }
}
