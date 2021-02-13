import * as React from 'react'
import styled from 'styled-components'

import { Text } from '../Text'

interface SwitchColors {
  toggle?: string
  toggleSelected?: string
  background?: string
  backgroundSelected?: string
}

const SwitchSlider = styled.span<{ colors: SwitchColors }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition-duration: 0.2s;
  transition-property: transform, background-color;
  border: 1px solid #000000;
  border-radius: 12px;
  background-color: ${({ colors }) => colors.background ?? '#ffffff' };

  &::before {
    position: absolute;
    top: -1px;
    left: -1px;
    width: 10px;
    height: 10px;
    content: "";
    transition-duration: 0.2s;
    transition-property: transform, background-color;
    border: 1px solid #000000;
    border-radius: 50%;
    background-color: ${({ colors }) => colors.toggle ?? '#ffffff' };
  }
`

export interface SwitchContainerProps {
  checked?: boolean
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void)
  value: string
  colors: SwitchColors
}

const SwitchContainerFactory: React.FC<SwitchContainerProps> = ({ onChange, checked, value, colors, ...props }) => {
  const handleChange = (event: any) => {
    if (onChange) { onChange(event) }
  }

  return (
    <div {...props}>
      <input type='checkbox' onChange={onChange} checked={checked} value={value} />
      <SwitchSlider colors={colors}/>
    </div>
  )
}

const SwitchContainer = styled(SwitchContainerFactory)<{ colors: SwitchColors }>`
  position: relative;
  width: 24px;
  height: 12px;
  margin: 10px 16px 10px 8px;

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  input:checked + ${SwitchSlider} {
    background-color: ${({ colors }) => colors.backgroundSelected ?? '#000000' };
  }

  input:checked + ${SwitchSlider}::before {
    background-color: ${({ colors }) => colors.toggleSelected ?? '#ffffff' };
  }

  input:focus {
    outline: none;
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + ${SwitchSlider}:before {
    transform: translateX(12px);
  }
`

export interface SwitchProps {
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void)
  checked?: boolean
  label: string
  value: string
  colors?: SwitchColors
}
// tslint:disable:jsx-no-lambda
// tslint:disable:no-unused-expression
const SwitchFactory: React.FC<SwitchProps> = ({
  checked,
  onChange,
  label,
  value,
  colors = { },
  ...props
}) => {
  return (
    <label {...props}>
      <SwitchContainer onChange={onChange} checked={checked} value={value} colors={colors} />
      <Text>{label}</Text>
    </label>
  )
}

export const Switch = styled(SwitchFactory)`
  position: relative;
  display: flex;
  align-items: center;
  align-self: 1;
  flex-direction: row;
  cursor: default;
`
