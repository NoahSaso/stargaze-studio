import {
  OPEN_EDITION_FACTORY_ADDRESS,
  OPEN_EDITION_IBC_ATOM_FACTORY_ADDRESS,
  OPEN_EDITION_IBC_FRENZ_FACTORY_ADDRESS,
  OPEN_EDITION_IBC_USDC_FACTORY_ADDRESS,
  OPEN_EDITION_UPDATABLE_FACTORY_ADDRESS,
  OPEN_EDITION_UPDATABLE_IBC_ATOM_FACTORY_ADDRESS,
  OPEN_EDITION_UPDATABLE_IBC_FRENZ_FACTORY_ADDRESS,
  OPEN_EDITION_UPDATABLE_IBC_USDC_FACTORY_ADDRESS,
  VENDING_FACTORY_ADDRESS,
  VENDING_FACTORY_FLEX_ADDRESS,
  VENDING_FACTORY_UPDATABLE_ADDRESS,
  VENDING_FACTORY_UPDATABLE_FLEX_ADDRESS,
  VENDING_IBC_ATOM_FACTORY_ADDRESS,
  VENDING_IBC_ATOM_FACTORY_FLEX_ADDRESS,
  VENDING_IBC_ATOM_UPDATABLE_FACTORY_ADDRESS,
  VENDING_IBC_ATOM_UPDATABLE_FACTORY_FLEX_ADDRESS,
  VENDING_IBC_USDC_FACTORY_ADDRESS,
  VENDING_IBC_USDC_FACTORY_FLEX_ADDRESS,
  VENDING_IBC_USDC_UPDATABLE_FACTORY_ADDRESS,
  VENDING_IBC_USDC_UPDATABLE_FACTORY_FLEX_ADDRESS,
} from 'utils/constants'

import type { TokenInfo } from './token'
import { ibcAtom, ibcFrenz, ibcUsdc, stars } from './token'

export interface MinterInfo {
  id: string
  factoryAddress: string
  supportedToken: TokenInfo
  updatable?: boolean
  flexible?: boolean
}

export const openEditionStarsMinter: MinterInfo = {
  id: 'open-edition-stars-minter',
  factoryAddress: OPEN_EDITION_FACTORY_ADDRESS,
  supportedToken: stars,
  updatable: false,
}

export const openEditionUpdatableStarsMinter: MinterInfo = {
  id: 'open-edition-updatable-stars-minter',
  factoryAddress: OPEN_EDITION_UPDATABLE_FACTORY_ADDRESS,
  supportedToken: stars,
  updatable: true,
}

export const openEditionIbcAtomMinter: MinterInfo = {
  id: 'open-edition-ibc-atom-minter',
  factoryAddress: OPEN_EDITION_IBC_ATOM_FACTORY_ADDRESS,
  supportedToken: ibcAtom,
  updatable: false,
}

export const openEditionUpdatableIbcAtomMinter: MinterInfo = {
  id: 'open-edition-updatable-ibc-atom-minter',
  factoryAddress: OPEN_EDITION_UPDATABLE_IBC_ATOM_FACTORY_ADDRESS,
  supportedToken: ibcAtom,
  updatable: true,
}

export const openEditionIbcUsdcMinter: MinterInfo = {
  id: 'open-edition-ibc-usdc-minter',
  factoryAddress: OPEN_EDITION_IBC_USDC_FACTORY_ADDRESS,
  supportedToken: ibcUsdc,
  updatable: false,
}

export const openEditionUpdatableIbcUsdcMinter: MinterInfo = {
  id: 'open-edition-updatable-ibc-usdc-minter',
  factoryAddress: OPEN_EDITION_UPDATABLE_IBC_USDC_FACTORY_ADDRESS,
  supportedToken: ibcUsdc,
  updatable: true,
}

export const openEditionIbcFrenzMinter: MinterInfo = {
  id: 'open-edition-ibc-frenz-minter',
  factoryAddress: OPEN_EDITION_IBC_FRENZ_FACTORY_ADDRESS,
  supportedToken: ibcFrenz,
  updatable: false,
}

export const openEditionUpdatableIbcFrenzMinter: MinterInfo = {
  id: 'open-edition-updatable-ibc-frenz-minter',
  factoryAddress: OPEN_EDITION_UPDATABLE_IBC_FRENZ_FACTORY_ADDRESS,
  supportedToken: ibcFrenz,
  updatable: true,
}

export const openEditionMinterList = [
  openEditionStarsMinter,
  openEditionUpdatableStarsMinter,
  openEditionUpdatableIbcAtomMinter,
  openEditionIbcAtomMinter,
  openEditionIbcFrenzMinter,
  openEditionUpdatableIbcFrenzMinter,
  openEditionIbcUsdcMinter,
  openEditionUpdatableIbcUsdcMinter,
]

export const vendingStarsMinter: MinterInfo = {
  id: 'vending-stars-minter',
  factoryAddress: VENDING_FACTORY_ADDRESS,
  supportedToken: stars,
  updatable: false,
  flexible: false,
}

export const vendingUpdatableStarsMinter: MinterInfo = {
  id: 'vending-updatable-stars-minter',
  factoryAddress: VENDING_FACTORY_UPDATABLE_ADDRESS,
  supportedToken: stars,
  updatable: true,
  flexible: false,
}

export const vendingIbcAtomMinter: MinterInfo = {
  id: 'vending-ibc-atom-minter',
  factoryAddress: VENDING_IBC_ATOM_FACTORY_ADDRESS,
  supportedToken: ibcAtom,
  updatable: false,
  flexible: false,
}

export const vendingUpdatableIbcAtomMinter: MinterInfo = {
  id: 'vending-updatable-ibc-atom-minter',
  factoryAddress: VENDING_IBC_ATOM_UPDATABLE_FACTORY_ADDRESS,
  supportedToken: ibcAtom,
  updatable: true,
  flexible: false,
}

export const vendingIbcUsdcMinter: MinterInfo = {
  id: 'vending-ibc-usdc-minter',
  factoryAddress: VENDING_IBC_USDC_FACTORY_ADDRESS,
  supportedToken: ibcUsdc,
  updatable: false,
  flexible: false,
}

export const vendingUpdatableIbcUsdcMinter: MinterInfo = {
  id: 'vending-updatable-ibc-usdc-minter',
  factoryAddress: VENDING_IBC_USDC_UPDATABLE_FACTORY_ADDRESS,
  supportedToken: ibcUsdc,
  updatable: true,
  flexible: false,
}

export const vendingMinterList = [
  vendingStarsMinter,
  vendingUpdatableStarsMinter,
  vendingIbcAtomMinter,
  vendingUpdatableIbcAtomMinter,
  vendingIbcUsdcMinter,
  vendingUpdatableIbcUsdcMinter,
]

export const flexibleVendingStarsMinter: MinterInfo = {
  id: 'flexible-vending-stars-minter',
  factoryAddress: VENDING_FACTORY_FLEX_ADDRESS,
  supportedToken: stars,
  updatable: false,
  flexible: true,
}

export const flexibleVendingUpdatableStarsMinter: MinterInfo = {
  id: 'flexible-vending-updatable-stars-minter',
  factoryAddress: VENDING_FACTORY_UPDATABLE_FLEX_ADDRESS,
  supportedToken: stars,
  updatable: true,
  flexible: true,
}

export const flexibleVendingIbcAtomMinter: MinterInfo = {
  id: 'flexible-vending-ibc-atom-minter',
  factoryAddress: VENDING_IBC_ATOM_FACTORY_FLEX_ADDRESS,
  supportedToken: ibcAtom,
  updatable: false,
  flexible: true,
}

export const flexibleVendingUpdatableIbcAtomMinter: MinterInfo = {
  id: 'flexible-vending-updatable-ibc-atom-minter',
  factoryAddress: VENDING_IBC_ATOM_UPDATABLE_FACTORY_FLEX_ADDRESS,
  supportedToken: ibcAtom,
  updatable: true,
  flexible: true,
}

export const flexibleVendingIbcUsdcMinter: MinterInfo = {
  id: 'flexible-vending-ibc-usdc-minter',
  factoryAddress: VENDING_IBC_USDC_FACTORY_FLEX_ADDRESS,
  supportedToken: ibcUsdc,
  updatable: false,
  flexible: true,
}

export const flexibleVendingUpdatableIbcUsdcMinter: MinterInfo = {
  id: 'flexible-vending-updatable-ibc-usdc-minter',
  factoryAddress: VENDING_IBC_USDC_UPDATABLE_FACTORY_FLEX_ADDRESS,
  supportedToken: ibcUsdc,
  updatable: true,
  flexible: true,
}

export const flexibleVendingMinterList = [
  flexibleVendingStarsMinter,
  flexibleVendingUpdatableStarsMinter,
  flexibleVendingIbcAtomMinter,
  flexibleVendingUpdatableIbcAtomMinter,
  flexibleVendingIbcUsdcMinter,
  flexibleVendingUpdatableIbcUsdcMinter,
]
