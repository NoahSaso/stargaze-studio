import type { LinkTabProps } from './LinkTab'

export const sg721LinkTabs: LinkTabProps[] = [
  {
    title: 'Query',
    description: `Dispatch queries with your SG721 contract`,
    href: '/contracts/sg721/query',
  },
  {
    title: 'Execute',
    description: `Execute SG721 contract actions`,
    href: '/contracts/sg721/execute',
  },
  {
    title: 'Migrate',
    description: `Migrate SG721 contract`,
    href: '/contracts/sg721/migrate',
  },
]

export const minterLinkTabs: LinkTabProps[] = [
  {
    title: 'Instantiate',
    description: `Initialize a new Minter contract`,
    href: '/contracts/minter/instantiate',
  },
  {
    title: 'Query',
    description: `Dispatch queries with your Minter contract`,
    href: '/contracts/minter/query',
  },
  {
    title: 'Execute',
    description: `Execute Minter contract actions`,
    href: '/contracts/minter/execute',
  },
  {
    title: 'Migrate',
    description: `Migrate Minter contract`,
    href: '/contracts/minter/migrate',
  },
]

export const whitelistLinkTabs: LinkTabProps[] = [
  {
    title: 'Instantiate',
    description: `Initialize a new Whitelist contract`,
    href: '/contracts/whitelist/instantiate',
  },
  {
    title: 'Query',
    description: `Dispatch queries with your Whitelist contract`,
    href: '/contracts/whitelist/query',
  },
  {
    title: 'Execute',
    description: `Execute Whitelist contract actions`,
    href: '/contracts/whitelist/execute',
  },
]
