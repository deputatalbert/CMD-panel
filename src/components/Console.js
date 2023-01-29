import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import Flex from './Flex';
import Line from './Line';

const StyledConsole = styled.textarea`
width: 100%;
height: 70vh;
background: black;
border: none;
font-size: 24px;
resize: none;
color: ${({color}) => color || 'white'};
&:focus {
    outline: none;
}
`

const Console = ({color, ...props}) => {

const [lines, setLines] = useState(['C/user/NIK>'])

const onKeyPress = e => {
    if (e.charCode == 13) {
        setLines([...lines, "C/user/NIK>"])
    }
}

  return (
    <Flex>
        <Flex direction={"column"}>
            {lines.map(line => 
                <Line color ={color}>{line}</Line>
            )}
        </Flex>
        <StyledConsole onKeyPress={onKeyPress} color={color} {...props}/>
    </Flex>
  )
};

export default Console