import Header from '../Header'
import { BaseLayoutContainer, TemporaryInfo } from './BaseLayout.styles'

const BaseLayout = props => (
  <>
    {/* <TemporaryInfo>
      <p>📢 I'm currently working on this project. Some features may not work as you expect! Sorry 🙏</p>
    </TemporaryInfo> */}
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

        a {
          text-decoration: none;
        }

        a:hover {
          text-decoration: none;
        }

        /* CUSTOM LINE COLOR */
        .vertical-timeline::before {
          background: #ccc;
        }
      `}
    </style>
  </>
)

export default BaseLayout