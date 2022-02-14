//third party
import { ethers } from "ethers";
//app
import FundMe from "../../artifacts/contracts/FundMe.sol/FundMe.json";

//type for ether js
declare let window: any;

//contract addresses
const fundMeAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function FundMeInterface() {
  //event handlers

  return (
    <div className="flex-row shadow p-2 justify-center ">
      <h2 className="text-center">Fund Me </h2>
      <button className="capitalize" onClick={handleGetPrice}>
        get price
      </button>
    </div>
  );
}

export default FundMeInterface;
