import { SkillsetContainer, Img, Title } from './Skillset.styles'

const Skillset = ({ imgSrc, title }) => (
  <SkillsetContainer>
    <Img src={imgSrc} alt={title} />
    <Title>{title}</Title>
  </SkillsetContainer>
)

export default Skillset