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
  const handleGetPrice = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const fundMe = new ethers.Contract(fundMeAddress,FundMe.abi,provider)
    const price = await fundMe.getPrice()
    console.log(await)

  };
  return (
    <div className="flex flex-col shadow p-2 items-center ">
      <h2 className="text-center">Fund Me </h2>
      <button
        className="capitalize bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-fit"
        onClick={handleGetPrice}
      >
        get price
      </button>
    </div>
  );
}

export default FundMeInterface;