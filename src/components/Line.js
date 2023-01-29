import React from 'react'
import styled from 'styled-components'

const Styledline = styled.div`
font-size: 24px;
color: ${props => props.color || 'white'}


`

export const Line = (props) => {
  return <Styledline {...props}/>
}

export default Line;
