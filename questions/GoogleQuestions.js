import { expect } from 'chai';
import { GoogleSearch } from '../models/GoogleSearch.js'

const googleSearch = new GoogleSearch();

export class GoogleQuestions {

    async verifyResults(comparison, number) {

        let actualResults = await googleSearch.getSearchResults();
        switch(comparison) {
          case 'more':
            expect(actualResults).to.be.above(parseInt(number), `Error: The actual results (${actualResults}) are NOT more than ${number}.`);
            break;
          case 'less':
            expect(actualResults).to.be.below(parseInt(number), `Error: The actual results (${actualResults}) are NOT less than ${number}.`);
            break;
          default:
            throw new Error(`Comparison "${comparison}" is not supported`);
        }

    }

}