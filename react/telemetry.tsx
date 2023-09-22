import React, { FC } from 'react'
import { Layout, PageBlock, Divider } from 'vtex.styleguide'

import TelemetryActiveToggle from './TelemetryComponents/TelemetryActiveToggle'
import Instruments from './TelemetryComponents/Instruments'

const Telemetry: FC = () => {
  return (
    <Layout>
      <PageBlock title="VTEX Telemetry" subtitle="Store Settings">
        <TelemetryActiveToggle />
        <div className="mv6">
          <Divider />
        </div>
        <Instruments />
      </PageBlock>
    </Layout>
  )
}

export default Telemetry
