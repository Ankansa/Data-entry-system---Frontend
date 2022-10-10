import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FullListComponent } from '../full-list/full-list.component';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {

  name: any
  address: any
  email: any
  dob: any
  country: any
  id: any

  constructor(public dialogRef: MatDialogRef<FullListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {
    this.name = data.name;
    this.address = data.address;
    this.dob = data.birthDate;
    this.email = data.emailid;
    this.country = data.country;
    this.id = data._id;
  }



  ngOnInit(): void {
  }

}
