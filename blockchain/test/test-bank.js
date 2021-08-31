const { expect } = require('chai');


describe('Bank App', () => {
    let bank, token, owner, address_1, address_2;
    let addresses;

    console.log('heeloo there')

    beforeEach(async ()=>{
        const BankContract = await ethers.getContractFactory("Bank")
    })


})