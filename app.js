//Module - Ecapsulated Code (only share minimum)
//CommonJS, every file is module (by default)
const secret = 'SUPER SECRET'
const jhon = 'jhon'
const peter = 'peter'

const sayHi = (name) => {
    console.log(`Hello there ${name}`);
}
sayHi('Rish')
sayHi(jhon)
sayHi(peter)