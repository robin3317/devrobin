import { CardContainer } from './Card.Styles'

const Card = props => {
  return(
  <CardContainer {...props}>
    {props.children}
  </CardContainer>
)}

export default Card