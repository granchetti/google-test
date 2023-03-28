import selectors from '../data/selectors.json' assert { type: "json" };
import { GoogleInteractions } from '../interactions/GoogleInteractions.js';

const searchResults_XPATH = selectors.searchResults_XPATH;
const googleInteractions = new GoogleInteractions();

export class GoogleSearch {

    async getElementTextAsArray() {

        const elementText = await googleInteractions.getText(searchResults_XPATH);
        const elementArray = await elementText.split(" ");
        return elementArray;

    }

    async getSearchResults() {

        let elementArray = await this.getElementTextAsArray();
        let results = elementArray[1];
        let actualResults = parseInt(results.replace(/[.]/g, ''));
        return actualResults;

    }

}