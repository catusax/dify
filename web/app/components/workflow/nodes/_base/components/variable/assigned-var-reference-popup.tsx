'use client'
import type { FC } from 'react'
import React from 'react'
import VarReferenceVars from './var-reference-vars'
import type { NodeOutPutVar, ValueSelector, Var } from '@/app/components/workflow/types'
import ListEmpty from '@/app/components/base/list-empty'

type Props = {
  vars: NodeOutPutVar[]
  onChange: (value: ValueSelector, varDetail: Var) => void
  itemWidth?: number
}
const AssignedVarReferencePopup: FC<Props> = ({
  vars,
  onChange,
  itemWidth,
}) => {
  // max-h-[300px] overflow-y-auto todo: use portal to handle long list
  return (
    <div className='p-1 bg-components-panel-bg-bur rounded-lg border-[0.5px] border-components-panel-border shadow-lg w-[352px]' >
      {(!vars || vars.length === 0)
        ? <ListEmpty
          title='No available assigned variables'
          description='Assigned variables must be writable variables, such as conversation variables.'
        />
        : <VarReferenceVars
          searchBoxClassName='mt-1'
          vars={vars}
          onChange={onChange}
          itemWidth={itemWidth}
          isSupportFileVar
        />
      }
    </div >
  )
}
export default React.memo(AssignedVarReferencePopup)