/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { Fragment, useMemo } from 'react'

import Context from '../context'
import useDeck from '../hooks/use-deck'
import useScale from '../hooks/use-scale'
import { modes } from '../constants'

export const Slide = ({ slide, index, preview, className }) => {
  const outer = useDeck()
  const { length } = useDeck()
  const index2 = index + 1
  const slideWidth = outer.theme.size.width
  const slideHeight = outer.theme.size.height

  const [containerRef, scale] = useScale(slideWidth, slideHeight)

  const context = useMemo(() => ({
    ...outer,
    scale,
    index,
    preview,
  }), [outer, scale, index, preview])

  return (
    <Context.Provider value={context}>
      <div
        ref={containerRef}
        className={className}
        sx={{
          position: 'relative',
          height: '100%',
          width: '100%',
          pb: preview ? `${100 * (slideHeight / slideWidth)}%` : null,
          overflow: preview ? 'hidden' : null
        }}
      >
        <div
          sx={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: `translate(-50%, -50%) scale(${scale.ratio})`,
            transformOrigin: 'center',
            width: `${slideWidth}px`,
            height: `${slideHeight}px`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'text',
            bg: 'background',
            variant: 'styles.Slide',
          }}>
          {slide}

      </div>

       <div style={{
        //transform: `translate(-50%, -50%) scale(${scale.ratio})`,
            //transformOrigin: 'center',
      position: 'fixed',
      fontFamily: 'system-ui,sans-serif',
    background:'rgb(50,65,171)',
      fontSize:'18px',
      //transform: `translate(-50%, -50%) scale(${scale.ratio})`,
      transformOrigin: 'center',
      zIndex: 1,
      left: 0,
               width:'100%',
      bottom: 0,
      right: 0,
      pointerEvents: 'none',
      }}>
      .
      </div>
      <div style={{
      position: 'fixed',
    background:'rgb(50,65,171)',
      fontFamily: 'system-ui,sans-serif',
      fontSize:'17px',
      fontWeight:'600',
      //transform: `translate(-50%, -50%) scale(${scale.ratio})`,
      //transformOrigin: 'center',
      color:'white',
      zIndex: 1,
      //left: 0,
      bottom: 0,
      right: 10,
      pointerEvents: 'none',
      }}>
      {index2}  /  {length}
      </div>


        </div>

    </Context.Provider>


  )
}

export default Slide
