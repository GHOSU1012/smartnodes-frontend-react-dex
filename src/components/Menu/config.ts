import { MenuEntry } from 'toolkit/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: '/images/home/home.png',
    href: '/',
  },
  {
    label: t('BuyNode'),
    icon: '/images/home/farm.png',
    href: '/buy',
  },
  {
    label: t('Swap'),
    icon: '/images/home/swap.png',
    href: '/swap',
  },
  {
    label: t('Treasury'),
    icon: '/images/home/farm.png',
    href: '/Treasury',
  },
  {
    label: t('Whitepaper'),
    icon: '/images/home/farm.png',
    href: '/Whitepaper',
  },
  {
    label: t('Tokenomics'),
    icon: '/images/home/farm.png',
    href: '/Tokenomics',
  },
]

export default config
