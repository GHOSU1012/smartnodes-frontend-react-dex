import { MenuEntry } from 'toolkit/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: '/images/home/home.png',
    href: '/',
  },
  {
    label: t('Presale'),
    icon: '/images/home/presale.png',
    href: '/buy',
  },
  {
    label: t('Swap'),
    icon: '/images/home/swap.png',
    href: '/swap',
  },
  {
    label: t('Treasury'),
    icon: '/images/home/treasury.png',
    href: '/treasury',
  },
  {
    label: t('Whitepaper'),
    icon: '/images/home/whitepaper.png',
    href: 'https://docs.smartnodes.finance/',
  },
  {
    label: t('Tokenomics'),
    icon: '/images/home/tokenomics.png',
    href: 'https://docs.smartnodes.finance/smartnodes-token/tokenomics',
  },
]

export default config