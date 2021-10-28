const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser, page;

const host = 'http://localhost:3000';

const exampleGetData = {
    1: {
        author: 'a',
        content: 'b',
    },
    2: {
        author: 'c',
        content: 'd',
    },
};

const examplePostData = {
    3: {
        author: 'e',
        content: 'f',
        _id: 3,
    }
};

function fakeServerResponse(testData) {

    return {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData),
    };

}

describe('E2E application tests', function () {

    before(async () => {

        browser = await chromium.launch();

        // browser = await chromium.launch({ headless: false, slowMo: 500 });

    });

    beforeEach(async () => {

        page = await browser.newPage();

        await page.goto(host);

    });

    afterEach(async () => {

        await page.close();

    });

    after(async () => {

        await browser.close();

    });

    describe('Check the \'load messages\' functionality', () => {

        it('Should receive a correct response from the server and display it in the textarea when the \'Refresh\' button is clicked', async () => {

            await page.route('**/jsonstore/messenger', r => {

                r.fulfill(fakeServerResponse(exampleGetData));

            });

            const [response] = await Promise.all([

                page.waitForResponse('**/jsonstore/messenger'),

                page.click('#refresh'),

            ]);

            const data = await response.json();

            expect(data).to.deep.equal(exampleGetData);

            const textareaValue = await page.$eval('#messages', e => e.value);

            expect(textareaValue).to.include('a: b');

            expect(textareaValue).to.include('c: d');

        });

    });

    describe('Check the \'send message\' functionality', () => {

        it('Should receive a correct response from the server and add a new message to the others when the \'Send\' button is clicked', async () => {

            let responseData;

            await page.route('**/jsonstore/messenger', (route, request) => {

                if (request.method() == 'POST') {

                    route.fulfill(fakeServerResponse(examplePostData));

                    responseData = request.postData();

                }

            });

            await page.fill('#author', 'e');

            await page.fill('#content', 'f');

            const [response] = await Promise.all([

                page.waitForResponse('**/jsonstore/messenger'),

                page.click('#submit'),

            ]);

            const data = await response.json();

            expect(data).to.deep.equal(examplePostData);

        });

        it('Should clear the two inputs (author and message) when the \'Send\' button is clicked', async () => {

            let responseData;

            await page.route('**/jsonstore/messenger', (route, request) => {

                if (request.method() == 'POST') {

                    route.fulfill(fakeServerResponse(examplePostData));

                    responseData = request.postData();

                }

            });

            await page.fill('#author', 'e');

            await page.fill('#content', 'f');

            const [response] = await Promise.all([

                page.waitForResponse('**/jsonstore/messenger'),

                page.click('#submit'),

            ]);

            const inputAuthorValue = await page.$eval('#author', e => e.value);

            const inputMessageValue = await page.$eval('#content', e => e.value);

            expect(inputAuthorValue).to.equal('');

            expect(inputMessageValue).to.equal('');

        });

    });

});