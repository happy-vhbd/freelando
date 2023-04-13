import React from 'react'
import { Global, css } from '@emotion/react'

export const GlobalStyle = () => {
  const styleCss = css`
    * {
      font-family: 'Montserrat', sans-serif; 
    }
  `

  return (
    <Global
      styles={styleCss}
    />
  )
}
