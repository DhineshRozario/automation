describe ('First Steps with WebdriverIO', () => {
    it('Load Example website', () => {
        browser.url('http://www.example.com')
        browser.pause(2000)

        expect(browser).toHaveUrl('http://www.example.com/')
    })

    it ('Load WebdriverIO Website', ()=> {
        browser.url('https://webdriver.io')
        browser.pause(3000)
    })
    
    
    
    // it ('', ()=> {
        
    // })
})