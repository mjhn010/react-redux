import React from 'react'
import { useSelector } from 'react-redux'
function GrandSonBox() {
    let count = useSelector(state => state.count)
  return (
    <div>
      this is grand{count}
    </div>
  )
}

export default GrandSonBox
