import { CardContainer } from './Card.Styles'

const Card = props => (
  <CardContainer {...props}>
    {props.children}
  </CardContainer>
)

export default Card