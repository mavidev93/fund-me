//third party
import { ethers } from "ethers";
//app
import FundMe from "../../artifacts/contracts/FundMe.sol/FundMe.json";
import Greeter from "../../artifacts/contracts/Greeter.sol/Greeter.json";

//type for ether js
declare let window: any;

//contract addresses
const fundMeAddress = "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512";

const gretterAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

function FundMeInterface() {
  //event handlers
  const handleSetGretter = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner()
    console.log(signer)
    const gretter = new ethers.Contract(gretterAddress, Greeter.abi, provider);
    console.log(gretter);
    console.log(provider);
  };

  const handleGetGreeter = () => {};
  return (
    <div className="flex shadow">
      <button onClick={handleSetGretter}>set greater</button>
      <button onClick={handleGetGreeter}>get greater</button>
      Fund Me interface
    </div>
  );
}

export default FundMeInterface;
