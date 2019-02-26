import React from 'react'
import styled from 'styled-components'

const InputContent = styled.div`
  display: flex;
  flex-flow: column;
`;

const Label = styled.label`
  padding-right: 5px;
  font-size: 11px;
  font-weight: 700;
  color: #8D8C8C;
`;

const Input = styled.input`
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  border: 1px solid #e6e6e6;
  padding: 5px;
  &:focus {
    border: 2px solid #1D6F93;
  }
`;

const Error = styled.span`
  color: red;
  font-size: 13px;
`;

const FlexRow = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
`;

const inputText = ({
  input,
  label,
  type,
  classname,
  placeholder,
  meta: { touched, error }
}) => (
  <InputContent>
    <FlexRow>
      <Label>{label}</Label>
      <Input {...input} placeholder={placeholder} type={type} className={classname} />
    </FlexRow>
    <div>
      {touched &&
        (error && <Error>{error}</Error>)
      }
    </div>
  </InputContent>
)

export default inputText