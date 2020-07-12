import Header from './Header'

const BaseLayout = props => (
  <>
    <Header />
    {props.children}
  </>
)

export default BaseLayout