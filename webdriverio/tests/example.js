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
        expect(h1).toBeVisible()
    })
    
    it ('p tag should be visible', ()=> {
        // Get selector and save it to variable
        const pTag = $('p')
        expect(pTag).toBeVisible()
    })

    // it ('', ()=> {
        
    // })

    // it ('', ()=> {
        
    // })

    // it ('', ()=> {
        
    // })
})