require("dotenv").config();
const { ethers } = require("ethers");

async function main() {
	// Load environment variables
	const INFURA_KEY = process.env.INFURA_KEY ?? "";

	const privateKey = process.env.DEPLOYER_PRIVATE_KEY;
	const providerUrl = `https://polygon-amoy.infura.io/v3/${INFURA_KEY}`;
	const contractAddressStaking = "0x6433AB497156e9F7b526428b4c94fC1509971637";
	const contractAddressParticipation =
		"0x7489F2b7e997bEE4D8BFD771C29d0e300a2e2eEb";
	const newGovOpsAddress = "0xCF1648C891c48dA4e388D0f3CC0370004D732258";

	// Connect to the Ethereum network
	const provider = new ethers.providers.JsonRpcProvider(providerUrl);
	const wallet = new ethers.Wallet(`0x${privateKey}`, provider);

	// Define the smart contract interface (ABI) for the function you want to call
	const abi = [
		// Replace this with the actual ABI for your setGovOps function
		"function setGovOps(address newGovOpsAddress)",
	];

	// Connect to your contract
	const contractStaking = new ethers.Contract(
		contractAddressStaking,
		abi,
		wallet
	);
	const contractParticipation = new ethers.Contract(
		contractAddressParticipation,
		abi,
		wallet
	);

	// Call the setGovOps function
	try {
		const tx1 = await contractStaking.setGovOps(newGovOpsAddress);
		console.log("Transaction hash:", tx1.hash);
		const receipt1 = await tx1.wait();
		console.log("Transaction confirmed in block:", receipt1.blockNumber);
		const tx2 = await contractParticipation.setGovOps(newGovOpsAddress);
		console.log("Transaction hash:", tx2.hash);
		const receipt2 = await tx2.wait();
		console.log("Transaction confirmed in block:", receipt2.blockNumber);
	} catch (error) {
		console.error("Error calling setGovOps:", error);
	}
}

main().catch(console.error);
