import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/Service/data/data.service';
import { FullListComponent } from '../full-list/full-list.component';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  name: any
  address: any
  email: any
  dob: any
  country: any
  id:any

  updateform: FormGroup;

  constructor(public dialogRef: MatDialogRef<FullListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private dataService: DataService) {
    this.name = data.name;
    this.address = data.address;
    this.dob = data.birthDate;
    this.email = data.emailid;
    this.country = data.country;
    this.id = data._id;

  }

  ngOnInit(): void {
    this.updateform = this.formBuilder.group({
      name: [this.name, [Validators.minLength(2)]],
      emailid: [this.email, [Validators.email]],
      birthDate: [this.dob],
      address: [this.address],
      country: [this.country]
    });
  }

  update() {
    console.log("Update button working")
    this.dialogRef.close();

    if (this.updateform.valid) {
      console.log("the value is: ", this.updateform.value)
      this.dataService.update(this.updateform.value, this.id).subscribe((responce:any)=>{
        console.log("The responce after update is :", responce)

      })

    }




  }

}
