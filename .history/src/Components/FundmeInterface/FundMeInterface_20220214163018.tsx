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
