import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  // {
  //   pid: 0,
  //   lpSymbol: 'BLH',
  //   lpAddresses: {
  //     // 97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
  //     // 56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //     97: process.env.REACT_APP_CAKETOKEN,
  //     56: process.env.REACT_APP_CAKETOKEN,
  //   },
  //   token: tokens.syrup,
  //   quoteToken: tokens.wbnb,
  // },
  {
    // pid: 251,
    pid: 0,
    lpSymbol: 'BLH-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
      // 97: process.env.REACT_APP_LP1,
      // 56: process.env.REACT_APP_LP1,
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    // pid: 252,
    pid: 1,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
      // 97: process.env.REACT_APP_LP2,
      // 56: process.env.REACT_APP_LP2,
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
]

export default farms
