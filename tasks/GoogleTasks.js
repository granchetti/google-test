import { GoogleHome } from '../models/GoogleHome.js'

const googleHome = new GoogleHome();

export class GoogleTasks {

    async searchFor(word) {

        await googleHome.writeOnSearchBar(word);
        await googleHome.pressEnter();

    }
}