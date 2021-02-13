import * as React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../SectionTitle'

export interface SectionProps {
  title: React.ReactNode
  actions?: JSX.Element
  collapsed?: boolean
}

const SectionFactory: React.FC<SectionProps> = ({ collapsed = false, title, actions, children, ...restProps }) => (
  <SectionWrapper collapsed={collapsed} {...restProps}>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        {actions && <SectionActions>{actions}</SectionActions>}
      </SectionHeader>
      <SectionContent>
        {children}
      </SectionContent>
  </SectionWrapper>
)

const SectionContent = styled.div``

const SectionActions = styled.div``

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

const SectionWrapper = styled.section<{ collapsed: boolean }>`
  padding: 8px;

  ${SectionHeader} {
    opacity: ${(props) => props.collapsed ? 0.5 : 1 };
  }

  ${SectionContent} {
    display: ${(props) => props.collapsed ? 'none' : 'block'};
  }

  &:hover {
    ${SectionHeader} {
      opacity: 1;
    }
  }
`
export const Section = styled(SectionFactory)<SectionProps>`


  & + & {
    border-top: solid 1px rgba(0,0,0, 0.1);
  }
`
