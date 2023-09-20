import React, { FC } from 'react'
import { Layout, PageBlock } from 'vtex.styleguide'

import TelemetryActiveToggle from './TelemetryComponents/TelemetryActiveToggle'

const Telemetry: FC = () => {
  return (
    <Layout>
      <h1>Telemetry</h1>
      <PageBlock>
        <TelemetryActiveToggle />
        <p>I&apos;ll be a telemetry component</p>
      </PageBlock>
    </Layout>
  )
}

export default Telemetry
