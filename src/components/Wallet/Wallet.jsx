import "./Wallet.css";
import ABI from "./ABI.json";
import Web3 from "web3";
import { useState } from "react";

const Wallet = ({ saveState }) => {
  const [connected, setConnected] = useState(true);
  const init = async () => {
    try {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const contract = new web3.eth.Contract(
        ABI,
        "0xbB61e592Df9d902B16151a29594b6313AAC9a7B9"
      );
      setConnected(false);
      saveState({ web3: web3, contract: contract });
    } catch (error) {
      alert("Please Install Metamask");
    }
  };
  return (
    <>
      <div className="header">
        {false && (
          <button className="connectBTN">
            <a href="https://metamask.app.link/dapp/sriche.netlify.app/">
              Click For Mobile
            </a>
          </button>
        )}
        <button disabled={!connected} className="connectBTN" onClick={init}>
          {
            connected ? "Connect Metamask" : "Connected"
          }
        </button>
      </div>
    </>
  );
};
export default Wallet;
