import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/Service/data/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  entryForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dataService: DataService, private snakbar: MatSnackBar) { }

  ngOnInit(): void {
    this.entryForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      emailid: ['', [Validators.required, Validators.email]],
      birthDate: ['', [Validators.required]],
      address: ['', [Validators.required]],
      country: ['', [Validators.required]]
    });
  }

  submit() {
    console.log("Submit function workin")
    if (this.entryForm.valid) {
      this.dataService.submit(this.entryForm.value).subscribe((Response) => {
        console.log("The updated data is: ", Response)

        this.snakbar.open('Name added Sucessfull', 'Ok', {
        });


      }, (error: any) => {
        console.log("The error is: ", error);
        this.snakbar.open(error.error.message, 'Ok', {
        });
      }
      )
    }



  }

}
