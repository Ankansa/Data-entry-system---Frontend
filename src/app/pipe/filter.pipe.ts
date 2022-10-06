import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(content: any, searchString: string) {
    if (!searchString) {
      return content;
    }
    console.log(content)
    return content.filter((x: any) => x.name.toLocaleLowerCase() .includes(searchString)
      
      
    );
  }


}
