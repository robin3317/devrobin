import { SectionTitleContainer, Title, BorderBottom } from './SectionTitle.styles'

const SectionTitle = ({ title }) => (
  <SectionTitleContainer>
    <Title>
      {title}
      <BorderBottom />
    </Title>
  </SectionTitleContainer>
)

export default SectionTitle