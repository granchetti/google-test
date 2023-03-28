export class GoogleInteractions {

    async click(selector) {

        const element = await $(selector);
        const isPresent = await element.isExisting();
        if(isPresent) {
            await element.click();
        }

    }

    async enterSearchTerm(word, selector) {
        
        const element = await $(selector);
        await element.setValue(word);

    }

    async press(keyword) {

        await browser.keys(keyword);

    }


    async getText(selector) {

        const element = await $(selector);
        return await element.getText();

    }

    async waitUntil(conditionFn, options = {}) {

        const defaultOptions = { timeout: 30000, interval: 1000 };
        const { timeout, interval } = Object.assign({}, defaultOptions, options);
        await browser.waitUntil(
          conditionFn,
          { timeout, interval },
          `Timeout esperando a que se cumpla la condición`
        );
    }

}