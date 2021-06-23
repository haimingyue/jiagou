let lib = require('simoon-test-lib');
let argvs = require('process').argv;
console.log(argvs)
let command = argvs[2];
const options = argvs.splice(3);
if (options.length > 1) {
    let [option, param] = options;
    option = option.replace('--', '');
    if (command) {
        if (lib[command]) {
            lib[command]({ option, param })
        } else {
            console.log('无效的命令')
        }
    } else {
        console.log('请输入命令')
    }
}
if (command.startsWith('--') || command.startsWith('-')) {
    const globalOption = command.replace(/--|-/g, '')
    if (globalOption === 'version' || globalOption === 'V') {
        console.log('当前版本号是：v1.0.0')
    }
}