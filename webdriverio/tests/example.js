describe ('First Steps with WebdriverIO', () => {
    it('Load Example website', () => {
        browser.url('http://www.example.com')
        browser.pause(2000)
    })
})