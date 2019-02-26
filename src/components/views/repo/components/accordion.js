import React from 'react'
import styled from 'styled-components'


const AccordionContent = styled.div`
  background-color: #e6e6e6;
  padding: 10px 15px;
  border-top: 1px solid #d8d8d8;
`;

const Accordion = (props) => {
  return (
    <AccordionContent>
      <a href={props.url} target="_blank">{props.sha}</a>
    </AccordionContent>
  )
}

export default Accordion