import Web3 from 'web3';

export const getWeb3 = async () => {
  let web3 = null;
  console.log('window.ethereum: ', window.ethereum);
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    // Acccounts now exposed
    await window.ethereum.enable();
  } else if (window.web3) {
    // Legacy dapp browsers...
    // Use Mist/MetaMask's provider.
    web3 = window.web3;
  } else {
    // Fallback to localhost; use dev console port by default...
    const provider = new Web3.providers.HttpProvider('https://bsc-dataseed1.binance.org:443');
    web3 = new Web3(provider);
    console.log('No web3 instance injected, using Local web3.');
  }
  return web3;
};

export const f = () => {
  // const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
  // // Prompt user for account connections
  // await provider.send('eth_requestAccounts', []);
  // const signer = provider.getSigner();
  // console.log('Account:', await signer.getAddress());
};
