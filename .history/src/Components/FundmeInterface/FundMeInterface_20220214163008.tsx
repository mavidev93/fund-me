//third party
import { ethers } from "ethers";
//app
import FundMe from "../../artifacts/contracts/FundMe.sol/FundMe.json";

//type for ether js
declare let window: any;

//contract addresses
const fundMeAddress = "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512";


function FundMeInterface() {
  //event handlers
  const handleSetGretter = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();

    const gretter = new ethers.Contract(gretterAddress, Greeter.abi, signer);

    const tx = await gretter.setGreeting("abdolreza joon");
    console.log(tx);
  };

  const handleGetGreeter = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const greater = new ethers.Contract(gretterAddress, Greeter.abi, provider);
    const msg = await greater.greet();
    console.log(msg);
  };
  return (
    <div className="flex shadow">
      {/* <button onClick={handleSetGretter}>set greater</button> */}
      <br />
      <button onClick={handleGetGreeter}>get greater</button>
      Fund Me interface
    </div>
  );
}

export default FundMeInterface;