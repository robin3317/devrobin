import styled from 'styled-components'

export const CardContainer = styled.div`
  width: ${props => props.width || 'inherit'};
  height: ${props => props.height || 'inherit'};
  max-width: ${props => props.maxWidth || props.width || 'inherit'};
  max-height: ${props => props.maxHeight || props.height || 'inherit'};
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  padding: 15px 10px 10px;
`