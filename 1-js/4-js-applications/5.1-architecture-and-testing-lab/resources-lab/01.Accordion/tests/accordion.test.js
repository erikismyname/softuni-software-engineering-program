const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser, page;

describe('E2E tests', () => {

    before(async () => {

        browser = await chromium.launch();

    });

    beforeEach(async () => {

        page = await browser.newPage();

    });

    afterEach(async () => {

        await page.close();

    });

    after(async () => {

        await browser.close();

    });

    it('Should take a screenshot', async () => {

        await page.goto('http://localhost:3000');

        await page.screenshot({ path: 'index.png' });

    });

    it('Should load initial page content', async () => {

        await page.goto('http://localhost:3000');

        const pageContent = await page.content();

        expect(pageContent).to.include('Scalable Vector Graphics');

        expect(pageContent).to.include('Open standard');

        expect(pageContent).to.include('Unix');

        expect(pageContent).to.include('ALGOL');

    });

    it('Should get the correct content of the first title', async () => {

        await page.goto('http://localhost:3000');

        const firstTitleContent = await page.textContent('.accordion .head span');

        expect(firstTitleContent).to.equal('Scalable Vector Graphics');

    });

    it('Should toggle the content on and change the button text correctly', async () => {

        await page.goto('http://localhost:3000');

        await page.click('text=More');

        await page.waitForSelector('.extra p');

        const visibleElmnts = await page.isVisible('.extra p');

        expect(visibleElmnts).to.be.true;

        const btnElContent = await page.textContent('#main > .accordion > .head > button');

        expect(btnElContent).to.equal('Less');

    });

    it.only('Should toggle the content off and change the button text correctly', async () => {

        await page.goto('http://localhost:3000');

        await page.click('text=More');

        await page.waitForSelector('.extra p');

        await page.click('text=Less');

        const visibleElmnts = await page.isVisible('.extra p');

        expect(visibleElmnts).to.be.false;

        const btnElContent = await page.textContent('#main > .accordion > .head > button');

        expect(btnElContent).to.equal('More');

    });

});