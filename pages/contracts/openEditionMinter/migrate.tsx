import { Button } from 'components/Button'
import { ContractPageHeader } from 'components/ContractPageHeader'
import { useExecuteComboboxState } from 'components/contracts/openEditionMinter/ExecuteCombobox.hooks'
import { FormControl } from 'components/FormControl'
import { AddressInput, NumberInput } from 'components/forms/FormInput'
import { useInputState, useNumberInputState } from 'components/forms/FormInput.hooks'
import { JsonPreview } from 'components/JsonPreview'
import { LinkTabs } from 'components/LinkTabs'
import { openEditionMinterLinkTabs } from 'components/LinkTabs.data'
import { TransactionHash } from 'components/TransactionHash'
import { useContracts } from 'contexts/contracts'
import { useWallet } from 'contexts/wallet'
import type { MigrateResponse } from 'contracts/openEditionMinter'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import type { FormEvent } from 'react'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { FaArrowRight } from 'react-icons/fa'
import { useMutation } from 'react-query'
import { withMetadata } from 'utils/layout'
import { links } from 'utils/links'

const OpenEditionMinterMigratePage: NextPage = () => {
  const { openEditionMinter: contract } = useContracts()
  const wallet = useWallet()

  const [lastTx, setLastTx] = useState('')

  const comboboxState = useExecuteComboboxState()
  const type = comboboxState.value?.id
  const codeIdState = useNumberInputState({
    id: 'code-id',
    name: 'code-id',
    title: 'Code ID',
    subtitle: 'Code ID of the New Open Edition Minter',
    placeholder: '1',
  })

  const contractState = useInputState({
    id: 'contract-address',
    name: 'contract-address',
    title: 'Open Edition Minter Address',
    subtitle: 'Address of the Open Edition Minter contract',
  })
  const contractAddress = contractState.value

  const { data, isLoading, mutate } = useMutation(
    async (event: FormEvent): Promise<MigrateResponse | null> => {
      event.preventDefault()
      if (!contract) {
        throw new Error('Smart contract connection failed')
      }
      if (!wallet.initialized) {
        throw new Error('Please connect your wallet.')
      }

      const migrateMsg = {}
      return toast.promise(contract.migrate(contractAddress, codeIdState.value, migrateMsg), {
        error: `Migration failed!`,
        loading: 'Executing message...',
        success: (tx) => {
          if (tx) {
            setLastTx(tx.transactionHash)
          }
          return `Transaction success!`
        },
      })
    },
    {
      onError: (error) => {
        toast.error(String(error), { style: { maxWidth: 'none' } })
      },
    },
  )

  const router = useRouter()

  useEffect(() => {
    if (contractAddress.length > 0) {
      void router.replace({ query: { contractAddress } })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contractAddress])
  useEffect(() => {
    const initial = new URL(document.URL).searchParams.get('contractAddress')
    if (initial && initial.length > 0) contractState.onChange(initial)
  }, [])

  return (
    <section className="py-6 px-12 space-y-4">
      <NextSeo title="Migrate Open Edition Minter Contract" />
      <ContractPageHeader
        description="Open Edition Minter contract allows multiple copies of a single NFT to be minted in a specified time interval."
        link={links.Documentation}
        title="Open Edition Minter Contract"
      />
      <LinkTabs activeIndex={2} data={openEditionMinterLinkTabs} />

      <form className="grid grid-cols-2 p-4 space-x-8" onSubmit={mutate}>
        <div className="space-y-8">
          <AddressInput {...contractState} />
          <NumberInput isRequired {...codeIdState} />
        </div>
        <div className="space-y-8">
          <div className="relative">
            <Button className="absolute top-0 right-0" isLoading={isLoading} rightIcon={<FaArrowRight />} type="submit">
              Execute
            </Button>
            <FormControl subtitle="View execution transaction hash" title="Transaction Hash">
              <TransactionHash hash={lastTx} />
            </FormControl>
          </div>
          <FormControl subtitle="View current message to be sent" title="Payload Preview">
            <JsonPreview
              content={{
                sender: wallet.address,
                contract: contractAddress,
                code_id: codeIdState.value,
                msg: {},
              }}
              isCopyable
            />
          </FormControl>
        </div>
      </form>
    </section>
  )
}

export default withMetadata(OpenEditionMinterMigratePage, { center: false })
