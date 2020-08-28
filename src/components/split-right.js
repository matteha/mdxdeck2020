/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

export const SplitRight = ({ children, ...props }) => {
  const [first, ...rest] = React.Children.toArray(children)
  return (
    <div
      {...props}
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        textAlign: 'center',
        paddingRight:'20px',
      }}>
      <div sx={{
             width: '50%',
             paddingRight: '50px',
             paddingLeft: '10px',
           }}>{rest}</div>
      <div sx={{ width: '50%' }}>{first}</div>
    </div>
  )
}

export default SplitRight
