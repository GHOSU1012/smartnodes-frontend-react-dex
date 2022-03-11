// Set of helper functions to facilitate wallet setup
import { ChainId } from 'toolkit/sdk'
import { BASE_URL, BASE_BSC_SCAN_URLS } from 'config'
import { nodes } from './getRpcUrl'

/**
 * Prompt the user to add BSC as a network on Metamask, or switch to BSC if the wallet is on a different network
 * @returns {boolean} true if the setup succeeded, false otherwise
 */


// 0xa86a (hex) = 43114 (dec);
// 0xa869 (hex) = 43113 (dec);

export const setupNetwork = async () => {
  const provider = window.ethereum
  if (provider) {
    const chainId = 43113;
    const chainIdHex = `0x${chainId.toString(16)}`;
    try {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: chainIdHex,
            chainName: chainIdHex === '0xa86a' ? 'Avalchance C-Chain Mainnet' :
              chainIdHex === '0xa869' ? 'Avalanche C-Chain Fuji Testnet' : 'Unsupported Net',
            rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
            nativeCurrency: {
              name: 'AVAX',
              symbol: 'avax',
              decimals: 18,
            },
            blockExplorerUrls: ['https://cchain.explorer.avax-test.network'],
          },
        ],
      })
      return true
    } catch (error) {
      console.error('Failed to setup the network in Metamask:', error)
      return false
    }
  } else {
    console.error("Can't setup the Avalanche network on metamask because window.ethereum is undefined")
    return false
  }
}

/**
 * Prompt the user to add a custom token to metamask
 * @param tokenAddress
 * @param tokenSymbol
 * @param tokenDecimals
 * @returns {boolean} true if the token has been added, false otherwise
 */
export const registerToken = async (tokenAddress: string, tokenSymbol: string, tokenDecimals: number) => {
  const tokenAdded = await window.ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20',
      options: {
        address: tokenAddress,
        symbol: tokenSymbol,
        decimals: tokenDecimals,
        image: `${BASE_URL}/images/tokens/${tokenAddress}.png`,
      },
    },
  })

  return tokenAdded
}
