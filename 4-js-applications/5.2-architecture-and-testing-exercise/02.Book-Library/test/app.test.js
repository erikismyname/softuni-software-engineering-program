const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

// ALERT: All of the tests pass when headless mode is off but some of them fail when it is on. If you happen to know why, please tell me in the comment section. Thanks in advance. All the best.

let browser, page;

const host = 'http://localhost:3000';

describe('E2E application tests', function () {

    this.timeout(5000);

    before(async () => {

        browser = await chromium.launch();

        browser = await chromium.launch({ headless: false, slowMo: 100 });

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

    describe('Check the load functionality', () => {

        it('Should not find anything in the table body initially', async () => {

            const tableBodyHtml = await page.innerHTML('table tbody');

            expect(tableBodyHtml.trim()).to.equal('');

        });

        it('Should load initial books', async () => {

            await page.click('#loadBooks');

            const content = await page.content();

            expect(content).to.include('Harry Potter and the Philosopher\'s Stone');

            expect(content).to.include('J.K.Rowling');

            expect(content).to.include('C# Fundamentals');

            expect(content).to.include('Svetlin Nakov');

            expect(content).to.include('Edit');

            expect(content).to.include('Delete');

        });

    });

    describe('Check the add functionality', () => {

        it('Should show an alert message when creating a book if one of the input fields is empty', async () => {

            await page.fill('#createForm input[name="title"]', '');

            await page.fill('#createForm input[name="author"]', 'A new author');

            page.on('dialog', d => {

                const dialogMsg = d.message();

                expect(dialogMsg).to.equal('All fields are required!');

                d.accept();

            });

            await page.click('text=Submit');

        });

        it('Should successfully create a new book and then load it with the others', async () => {

            await page.fill('#createForm input[name="title"]', 'A new title');

            await page.fill('#createForm input[name="author"]', 'A new author');

            await page.click('text=Submit');

            await page.click('#loadBooks');

            const content = await page.content();

            expect(content).to.include('A new title');

            expect(content).to.include('A new author');

        });

    });

    describe('Check the edit functionality', () => {

        it('Should load the correct title and author in the correct form on edit start', async () => {

            await page.click('#loadBooks')

            await page.click('table > tbody > tr:last-child > td:last-child >> text=Edit');

            const createFormVisibility = await page.isVisible('#createForm');

            expect(createFormVisibility).to.be.false;

            const editFormVisibility = await page.isVisible('#editForm');

            expect(editFormVisibility).to.be.true;

            const inputTitleValue = await page.$eval('#editForm input[name="title"]', e => e.value);

            const inputAuthorValue = await page.$eval('#editForm input[name="author"]', e => e.value);

            expect(inputTitleValue).to.equal('A new title');

            expect(inputAuthorValue).to.equal('A new author');

        });

        it('Should show an alert message when editing a book if one of the input fields is empty', async () => {

            await page.click('#loadBooks');

            await page.click('table > tbody > tr:last-child > td:last-child >> text=Edit');

            await page.fill('#editForm input[name="title"]', '');

            await page.fill('#editForm input[name="author"]', 'An edited author');

            page.on('dialog', d => {

                const dialogMsg = d.message();

                expect(dialogMsg).to.equal('All fields are required!');

                d.accept();

            });

            await page.click('text=Save');

        });

        it('Should successfully edit a book and then load it with the others', async () => {

            await page.click('#loadBooks');

            await page.click('table > tbody > tr:last-child > td:last-child >> text=Edit');

            await page.fill('#editForm input[name="title"]', 'An edited title');

            await page.fill('#editForm input[name="author"]', 'An edited author');

            await page.click('text=Save');

            await page.click('#loadBooks');

            const content = await page.content();

            expect(content).to.include('An edited title');

            expect(content).to.include('An edited author');

        });

    });

    describe('Check the delete functionality', () => {

        it('Should successfully delete a book', async () => {

            await page.click('#loadBooks');

            page.on('dialog', d => {

                const dialogMsg = d.message();

                expect(dialogMsg).to.equal('Are you sure you want to delete this book?');

                d.accept();

            });

            await page.click('table > tbody > tr:last-child > td:last-child >> text=Delete');

            await page.click('#loadBooks');

            const content = await page.content();

            expect(content).to.not.include('An edited title');

            expect(content).to.not.include('An edited author');

        });

    });

});