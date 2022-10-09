import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birthday'
})
export class BirthdayPipe implements PipeTransform {

  transform(value: string) {
    let SpValue = value.split("-")
    let year = parseInt(SpValue[0]);
    let month = parseInt(SpValue[1]);
    let age = 0
    let currentYear = new Date().getFullYear()
    let currentMonth = new Date().getMonth()
    let totalYear = currentYear - year
    if (month - currentMonth > 0) {
      console.log("If condition executed")
      age = totalYear - 1
    }else{
      console.log("else condition executed")
      age= totalYear
    }
    return age;
  }
}
