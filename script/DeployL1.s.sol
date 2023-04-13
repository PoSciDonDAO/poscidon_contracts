// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "forge-std/Script.sol";

import "../src/Counter.sol";

contract DeployL1 is Script {
    // Deployments
    Counter public counter;

    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");

        vm.startBroadcast(deployerPrivateKey);

        //Deploy Contracts
        counter = new Counter();

        vm.stopBroadcast();
    }
}
