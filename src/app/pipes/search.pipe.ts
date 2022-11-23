import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class SearchPipe implements PipeTransform {
  transform(data: any, searchKeyword: string) {
    if (data !== undefined) {
      return data.filter((item: any) => {
        return item.name.toLowerCase().includes(searchKeyword.toLowerCase());
      });
    }
    return null;
  }
}
