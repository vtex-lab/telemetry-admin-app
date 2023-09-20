import React, { FC, useState } from 'react'
import { Toggle } from 'vtex.styleguide'

const TelemetryActiveToggle: FC = () => {
  const [active, setActive] = useState(false)

  return (
    <Toggle
      label={active ? 'Telemetry Activated' : 'Telemetry Deactivated'}
      checked={active}
      onChange={() => setActive(!active)}
      semantic
    />
  )
}

export default TelemetryActiveToggle
