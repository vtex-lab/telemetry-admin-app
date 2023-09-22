import React, { FC, useState } from 'react'
import { Toggle } from 'vtex.styleguide'

const TelemetryActiveToggle: FC = () => {
  const [active, setActive] = useState(false)

  return (
    <>
      <h2 className="mt0 mb6">Active Telemetry:</h2>

      <Toggle
        label={active ? 'Telemetry Activated' : 'Telemetry Deactivated'}
        checked={active}
        onChange={() => setActive(!active)}
        semantic
      />
    </>
  )
}

export default TelemetryActiveToggle
