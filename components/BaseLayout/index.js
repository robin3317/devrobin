import Header from '../Header'
import { BaseLayoutContainer } from './BaseLayout.styles'

const BaseLayout = props => (
  <>
    <Header />
    <BaseLayoutContainer>
      {props.children}
    </BaseLayoutContainer>

    <style jsx global>
      {`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          font-size: 18px;
          font-weight: 500;
          color: #48586B;
        }

        * {
          box-sizing: border-box;
        }
      `}
    </style>
  </>
)

export default BaseLayout