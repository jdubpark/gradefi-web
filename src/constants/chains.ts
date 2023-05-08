import ethereumIcon from '@/assets/logo/ethereum/ethereum-icon-color.svg'
import polygonIcon from '@/assets/logo/polygon/polygon-icon-color.svg'
import polygonZkEvmIcon from '@/assets/logo/polygon/zkevm-icon-color.png'
import avalancheIcon from '@/assets/logo/avalanche/avalanche-icon-color.svg'
import arbitrumIcon from '@/assets/logo/arbitrum/arbitrum-icon-color.png'
import optimismIcon from '@/assets/logo/optimism/optimism-icon-color.svg'
import solanaIconBlack from '@/assets/logo/solana/solana-icon-black.svg'
import solanaIconColor from '@/assets/logo/solana/solana-icon-color.svg'

export const evmChainNames = [
  'ethereum',
  'polygon',
  'polygonZKEVM',
  'avalanche',
  'arbitrumOne',
  'optimism',
  // 'zkSyncEra'
]

export const nonEvmChainNames = ['solana', 'solanaCompressed']

export const allChainNames = [...evmChainNames, ...nonEvmChainNames]

export type EvmChainName = typeof evmChainNames[number]

export type NonEvmChainName = typeof nonEvmChainNames[number]

export type AllChainName = EvmChainName | NonEvmChainName

export type EVMGasPrice = { [name in EvmChainName]: number }

export type NativeTokenUsdPrice = { [name in AllChainName]: number }

export interface ChainDetails {
  [name: typeof allChainNames[number]]: {
    name: string
    icon: string
    color: string
    gasToken: string
  }
}

export const chainUiKit: ChainDetails = {
  ethereum: {
    name: 'Ethereum',
    icon: ethereumIcon,
    color: '#CDC3F7',
    gasToken: 'ETH',
  },
  polygon: {
    name: 'Polygon',
    icon: polygonIcon,
    color: '#7A4ADD',
    gasToken: 'MATIC',
  },
  polygonZKEVM: {
    name: 'Polygon zkEVM',
    icon: polygonZkEvmIcon,
    color: '#7A4ADD',
    gasToken: 'ETH',
  },
  avalanche: {
    name: 'Avalanche',
    icon: avalancheIcon,
    color: '#D64F49',
    gasToken: 'AVAX',
  },
  arbitrumOne: {
    name: 'Arbitrum One',
    icon: arbitrumIcon,
    color: '#4FA0E8',
    gasToken: 'ETH',
  },
  solana: {
    name: 'Solana',
    icon: solanaIconBlack,
    color: '#71ECAD', // #8C4BF5
    gasToken: 'SOL',
  },
  solanaCompressed: {
    name: 'Solana (Compressed)',
    icon: solanaIconColor,
    color: '#71ECAD',
    gasToken: 'SOL',
  },
  optimism: {
    name: 'Optimism',
    icon: optimismIcon,
    color: '#EA3431',
    gasToken: 'ETH',
  },
}
