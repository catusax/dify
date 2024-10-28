'use client'
import type { Plugin } from '../../types'
import type { MarketplaceCollection } from '../types'
import ListWithCollection from './list-with-collection'
import Card from '@/app/components/plugins/card'
import CardMoreInfo from '@/app/components/plugins/card/card-more-info'

interface ListProps {
  marketplaceCollections: MarketplaceCollection[]
  marketplaceCollectionPluginsMap: Record<string, Plugin[]>
  plugins?: Plugin[]
}
const List = ({
  marketplaceCollections,
  marketplaceCollectionPluginsMap,
  plugins,
}: ListProps) => {
  return (
    <div className='px-12 py-2 bg-background-default-subtle'>
      {
        !plugins && (
          <ListWithCollection
            marketplaceCollections={marketplaceCollections}
            marketplaceCollectionPluginsMap={marketplaceCollectionPluginsMap}
          />
        )
      }
      {
        plugins && (
          <div className='grid grid-cols-4 gap-3 mt-2'>
            {
              plugins.map(plugin => (
                <Card
                  key={plugin.name}
                  payload={plugin}
                  footer={
                    <CardMoreInfo
                      downloadCount={plugin.install_count}
                      tags={['Search', 'Productivity']}
                    />
                  }
                />
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default List