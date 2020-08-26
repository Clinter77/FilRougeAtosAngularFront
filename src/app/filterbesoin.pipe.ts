import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterbesoin'
})
export class FilterbesoinPipe implements PipeTransform {

  transform(besoins: any, term: any): any {

    // tslint:disable-next-line: curly
    if (term === undefined) return besoins;

    // tslint:disable-next-line: only-arrow-functions
    return besoins.filter(function(besoin) {
      return besoin.intitule.toLowerCase().includes(term.toLowerCase());
    });

   }

}
