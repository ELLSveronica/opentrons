import React from 'react'
import PropTypes from 'prop-types'
import capitalize from 'lodash/capitalize'

import {ListItem} from '@opentrons/components'

InstrumentListItem.propTypes = {
  isRunning: PropTypes.bool.isRequired,
  name: PropTypes.string,
  axis: PropTypes.string,
  volume: PropTypes.number,
  channels: PropTypes.string,
  probed: PropTypes.bool,
  clearLabwareReviewed: PropTypes.func
}

export default function InstrumentListItem (props) {
  const {isRunning, name, axis, volume, channels, probed, clearLabwareReviewed} = props
  const isDisabled = name == null
  const url = isRunning
  ? '#'
  : `/setup-instruments/${axis}`

  const confirmed = probed

  const description = !isDisabled
    ? `${capitalize(channels)}-channel`
    : 'N/A'

  const units = !isDisabled ? 'ul' : null
  return (
    <ListItem
      disabled={isDisabled || isRunning}
      url={url}
      onClick={!isRunning && clearLabwareReviewed}
      confirmed={confirmed}
    >
      <span>{axis}</span>
      <span>{description}</span>
      <span>{volume} {units}</span>
    </ListItem>
  )
}
