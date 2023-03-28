import { config } from '../wdio.conf.js';
import { GoogleHome } from '../models/GoogleHome.js'

const googleHome = new GoogleHome();
const baseUrl = config.baseUrl;

export class GoogleFacts {

    async openGoogle() {

        browser.url(baseUrl);
        googleHome.acceptCookies();

    }
    
}