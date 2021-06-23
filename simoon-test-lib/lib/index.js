module.exports = {
    sum(a, b) {
        return a + b
    },
    init({ option, param }) {
        console.log('init')
        console.log('执行init方法', option, param)
    }
}

// --version的实现
// command是在args的第三位，如果第三为出现了--开头，将成为一个全局的option