import Header from '../Header'
import { BaseLayoutContainer } from './BaseLayout.styles'

const BaseLayout = props => (
  <>
    <Header />
    <BaseLayoutContainer>
      {props.children}
    </BaseLayoutContainer>
  </>
)

export default BaseLayout