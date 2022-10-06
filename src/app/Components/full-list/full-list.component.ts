import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Service/data/data.service';

@Component({
  selector: 'app-full-list',
  templateUrl: './full-list.component.html',
  styleUrls: ['./full-list.component.scss']
})
export class FullListComponent implements OnInit {

  message:string;

  nameArr: any;
  searchString: any

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.allName()

    this.dataService.currentMessage.subscribe(message => this.searchString = message)
  }

  allName() {
    this.dataService.allName().subscribe((items: any) => {
      console.log("All name function workin", items.data)

      this.nameArr = items.data

    }, (error: any) => {
      console.log(error);
    })

  }

  newMessage() {
    this.dataService.changeMessage(this.message)
  }

  
}
