/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

export const Split = ({ children, ...props }) => {
  const [first, ...rest] = React.Children.toArray(children)
  return (
    <div
      {...props}
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        textAlign: 'center',
        paddingLeft:'20px',
      }}>
      <div sx={{ width: '50%' }}>{first}</div>
      <div sx={{
             width: '50%',
             paddingLeft: '50px',
             paddingRight: '10px'
           }}
      >{rest}</div>
    </div>
  )
}

export default Split
