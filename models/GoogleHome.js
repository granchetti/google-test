import selectors from '../data/selectors.json' assert { type: "json" };
import { GoogleInteractions } from '../interactions/GoogleInteractions.js';

const cookiesButton_XPATH = selectors.cookiesButton_XPATH;
const searchInput_XPATH = selectors.searchInput_XPATH;
const googleInteractions = new GoogleInteractions();

export class GoogleHome {

    async acceptCookies() {

        await googleInteractions.waitUntil(async () => {
            await googleInteractions.click(cookiesButton_XPATH);
        });

    }

    async writeOnSearchBar(word) {

        await googleInteractions.enterSearchTerm(word, searchInput_XPATH);

    }

    async pressEnter() {

        await googleInteractions.press('Enter');

    }

}

