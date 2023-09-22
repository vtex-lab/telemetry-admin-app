import React, { FC, useEffect, useState } from 'react'
import { Toggle } from 'vtex.styleguide'

import { getInstrumentationConfig, setInstrumentationStatus } from '../provider'

const storeId = 'localhost'

const TelemetryActiveToggle: FC = () => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    ;(async () => {
      const { status } = await getInstrumentationConfig(storeId)

      setActive(status)
    })()
  }, [])

  function toggleStatus() {
    setInstrumentationStatus(storeId, !active)
    setActive(!active)
  }

  return (
    <>
      <h2 className="mt0 mb6">Active Telemetry</h2>

      <Toggle
        label={active ? 'Telemetry Activated' : 'Telemetry Deactivated'}
        checked={active}
        onChange={() => toggleStatus()}
        semantic
      />
    </>
  )
}

export default TelemetryActiveToggle
