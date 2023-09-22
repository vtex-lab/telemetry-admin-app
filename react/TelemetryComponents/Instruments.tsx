/* eslint-disable react/display-name */
import React, { FC } from 'react'
import { Table } from 'vtex.styleguide'

const Instruments: FC = () => {
  const mock = [
    {
      id: 'close-minicart-metrics',
      name: 'Close Minicart Metrics',
      description: 'get metrics for clicks on close minicart button',
      active: false,
    },
    {
      id: 'minicart-metrics',
      name: 'Minicart Metrics',
      description: 'get metrics for clicks on minicart button',
      active: false,
    },
  ]

  const defaultSchema = {
    properties: {
      name: {
        type: 'string',
        title: 'Name',
      },
      description: {
        type: 'string',
        title: 'Description',
      },
    },
  }

  return (
    <>
      <h2 className="mt6 mb6">Instruments</h2>
      <div className="mb5">
        <Table
          fullWidth
          schema={defaultSchema}
          items={mock}
          density="high"
          bulkActions={{
            texts: {
              secondaryActionsLabel: 'Actions',
              rowsSelected: (qty: any) => (
                <React.Fragment>Selected rows: {qty}</React.Fragment>
              ),
              selectAll: 'Select all',
              allRowsSelected: (qty: any) => (
                <React.Fragment>All rows selected: {qty}</React.Fragment>
              ),
            },
            totalItems: mock.length,
            onChange: () => {},
            main: {
              label: 'Main Action',
              handleCallback: () => {},
            },
          }}
        />
      </div>
    </>
  )
}

export default Instruments
