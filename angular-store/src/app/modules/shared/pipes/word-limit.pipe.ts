import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordLimit'
})
export class WordLimitPipe implements PipeTransform {

  transform(word: string): string {
    if (word.length > 15 ) {
      word = word.substring(0, 15);
      word = word + '...';
    }
    return word;
  }

}
