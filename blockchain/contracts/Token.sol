pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {


    address private bankContract;


    modifier onlyBanks(){
        require(msg.sender == bankContract, "Only the Bank can do this dawg");
        _;
    }


    constructor(address _bankAddress) ERC20("DA Token", "DATOK") {
        bankContract = _bankAddress;
    }

    function mint(address _to, uint256 _amount) public onlyBanks {
        _mint(_to, _amount); 
    }
}