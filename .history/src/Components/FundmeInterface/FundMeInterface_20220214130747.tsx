//third party
import { ethers } from "ethers";
//app
import FundMe from "../../artifacts/contracts/FundMe.sol/FundMe.json";
import Greeter from "../../artifacts/contracts/Greeter.sol/Greeter.json";

//type for ether js
declare let window: any;

//contract addresses
const fundMeAddress = 


function FundMeInterface() {
  //event handlers
  const handleSetGretter = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract()
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
