import { CardContainer } from './Card.Styles'

const Card = props => (
  <CardContainer width={props.width} height={props.height}>
    {props.children}
  </CardContainer>
)

export default Card