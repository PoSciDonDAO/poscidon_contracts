// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "../../lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";
import "../../lib/openzeppelin-contracts/contracts/access/AccessControl.sol";

contract SCI is ERC20, AccessControl {

    constructor(
        address _treasuryWallet
    ) 
    ERC20("PoSciDon Token", "SCI") {
        _setupRole(DEFAULT_ADMIN_ROLE, _treasuryWallet);
        _mint(_treasuryWallet, 1891000e18);  
    }

    function mint(address account, uint256 amount) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _mint(account, amount);
    }

    function burn(address account, uint256 amount) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _burn(account, amount);
    }
}