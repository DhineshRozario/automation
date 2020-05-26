describe ('First Steps with WebdriverIO', () => {
    it('Load Example website', () => {
        browser.url('http://www.example.com')
        browser.pause(2000)

        expect(browser).toHaveUrl('http://www.example.com/')
        expect(browser).toHaveTitle('Example Domain')
    })

    it ('H1 should be visible', ()=> {
        // Get selector and save it to variable
        const h1 = $('h1')
        h1.waitForExist()
        expect(h1).toBeVisible()
    })
    
    it ('p tag should be visible', ()=> {
        // Get selector and save it to variable
        const pTag = $('p')
        pTag.waitForExist()
        expect(pTag).toBeVisible()
    })

    it ('Check Link Value', ()=> {
        const link = $('a')
        link.waitForExist()
        expect(link).toHaveLink('https://www.iana.org/domains/example')
    })

    it ('Get Element Text', ()=> {
        const text = $('h1').getText()
        console.log('h1 Text: ' + text)
        const element = $('h1')
        element.waitForExist()

        expect(element).toHaveText('Example Domain')
    })

    it ('Assert Attribute', ()=> {
        browser.url('https://devexpress.github.io/testcafe/example/')
        const button = $('#submit-button')
        button.waitForExist()
        expect(button).toHaveAttrContaining('type', 'submit')

    })

    it ('Assert Attribute Value', ()=> {
        const button = $('#populate')
        button.waitForExist()

        expect(button).toHaveValue('Populate')
    })

    // it ('', ()=> {
        
    // })

    // it ('', ()=> {
        
    // })
})