/* eslint-disable react/display-name */
import React, { FC, useState, useEffect } from 'react'
import { Table } from 'vtex.styleguide'

import { getInstrumentationConfig, setInstrumentationList } from '../provider'

const storeId = 'localhost'

const Instruments: FC = () => {
  const [instrumttConfig, setInstrumttConfig] = useState([{}])
  const [selectedRows, setSelectedRows] = useState([{}])

  useEffect(() => {
    ;(async () => {
      const { instrumentations } = await getInstrumentationConfig(storeId)

      const mappedInstrumentations = instrumentations.map((instrumentation) => {
        return { ...instrumentation, instId: instrumentation.id }
      })

      const selected = mappedInstrumentations.filter((instrumentation) => {
        return instrumentation.active
      })

      setSelectedRows(selected)
      setInstrumttConfig(mappedInstrumentations)
    })()
  }, [])

  function updateInstrumentations() {
    const selectedRowsIds = selectedRows.map((row: any) => {
      return row.instId
    })

    setInstrumentationList(storeId, selectedRowsIds)
  }

  function turnOffAllInstrumentations() {
    setSelectedRows([])
    setInstrumentationList(storeId, new Array<string>())
  }

  const defaultSchema = {
    properties: {
      name: {
        type: 'string',
        title: 'Name',
        width: 200,
      },
      description: {
        type: 'string',
        title: 'Description',
      },
    },
  }

  return (
    <>
      <h2 className="mt6 mb6">Instrumentations</h2>
      <div className="mb5">
        <Table
          fullWidth
          schema={defaultSchema}
          items={instrumttConfig}
          density="high"
          bulkActions={{
            fixed: true,
            texts: {
              secondaryActionsLabel: 'More',
              rowsSelected: (qty: any) => (
                <React.Fragment>Selected rows: {qty}</React.Fragment>
              ),
              selectAll: 'Select all',
              allRowsSelected: (qty: any) => (
                <React.Fragment>All rows selected: {qty}</React.Fragment>
              ),
            },
            totalItems: instrumttConfig.length,
            onChange: (params: any) => setSelectedRows(params.selectedRows),
            main: {
              label: 'Update',
              handleCallback: () => updateInstrumentations(),
            },
            others: [
              {
                label: 'Clear all',
                isDangerous: true,
                handleCallback: () => turnOffAllInstrumentations(),
              },
            ],
            selectedRows,
          }}
        />
      </div>
    </>
  )
}

export default Instruments
