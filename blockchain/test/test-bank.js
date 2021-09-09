const { expect } = require('chai');


describe('Bank App', () => {
    let bank, token, owner, address_1, address_2;
    let addresses;

    beforeEach(async ()=>{
        const BankContract = await ethers.getContractFactory("Bank");
        bank = await BankContract.deploy(),
        await bank.deployed()

        const TokenContract = await ethers.getContractFactory("Token");
        token = await TokenContract.deploy(bank.address),
        await token.deployed();

        [owner, address_1, address_2, ...addresses] = await ethers.getSigners()

    })

    // Tests deployment
    describe("Deployment", () =>{
        it('Should have zero assets', async ()=>{
            expect(await bank.totalAssets()).to.equal("0")
        });
        it("Should have 0 tokens and 0 deposit in owner account", async ()=>{
            expect(await bank.accounts(owner.address)).to.equal("0")
            expect(await token.balanceOf(owner.address)).to.equal("0")
        });
        it('Should have zero tokens and zero deposit for address_1', async ()=>{
            expect(await bank.accounts(address_1.address)).to.equal("0")
            expect(await token.balanceOf(address_1.address)).to.equal("0")
        });
        it('Should have zero tokens and zero deposit for address_2', async ()=>{
            expect(await bank.accounts(address_2.address)).to.equal("0")
            expect(await token.balanceOf(address_2.address)).to.equal("0")
        });

    })

    console.log('basic tests')


    // Tests Contract
    describe("Contract Functions", ()=>{
        it('Shou;', async ()=>{
            
        })
    })


})