/* eslint-disable */
import { useEffect } from 'react'
import { navigate } from '@reach/router'
import useDeck from './use-deck'
import { modes } from '../constants'
import { previous, next } from '../navigate'

const keys = {
  right: 39,
  left: 37,
  up: 38,
  down: 40,
  space: 32,
  k: 75,
  j: 74,
  f: 70,
  p: 80,
  o: 79,
  g: 71,
  esc: 27,
  pageUp: 33,
  pageDown: 34,
  f6: 117,
}

const toggleFullscreen = state =>
  ({ fullscreen: !state.fullscreen })

const toggleMode = next => state =>
  state.mode === next
    ? {
        mode: modes.normal,
      }
    : {
        mode: next,
      }

const inputElements = ['input', 'select', 'textarea', 'a', 'button']

export const useKeyboard = () => {
  const context = useDeck()

  useEffect(() => {
    const handleKeyDown = e => {
      const { metaKey, ctrlKey, shiftKey, altKey } = e
      if (metaKey || ctrlKey) return

      // ignore custom keyboard shortcuts when elements are focused
      const el = document.activeElement.tagName.toLowerCase()
      if (inputElements.includes(el)) return

      if (shiftKey) {
        switch (e.keyCode) {
          case keys.space:
            previous(context)
            break
        }
      } else if (altKey) {
        switch (e.keyCode) {
          case keys.f:
            context.setState(toggleFullscreen)
            break
          case keys.p:
            context.setState(toggleMode(modes.presenter))
            break
          case keys.o:
            context.setState(toggleMode(modes.overview))
            break
          case keys.g:
            context.setState(toggleMode(modes.grid))
            break
        }
      } else {
        switch (e.keyCode) {
          case keys.right:
          case keys.down:
          case keys.pageDown:
          case keys.j:
          case keys.pageDown:
          case keys.space:
            next(context)
            break
          case keys.left:
          case keys.up:
          case keys.k:
          case keys.pageUp:
            previous(context)
            break
          case keys.esc:
          case keys.f6:
            //context.setState({ mode: modes.normal })
            context.setState(toggleMode(modes.overview))
            break
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [context])
}

export default useKeyboard
