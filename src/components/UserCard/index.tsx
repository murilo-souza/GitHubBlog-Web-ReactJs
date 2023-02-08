import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'

import { Info } from '../Info'
import {
  Container,
  Description,
  Footer,
  Header,
  Image,
  Link,
  Name,
  Bio,
} from './styles'

interface UserCardProps {
  imgUrl: string
  name: string
  description: string
  info1: string
  info2: string | undefined
  info3: number
  githubLink: string
}

export function UserCard({
  imgUrl,
  name,
  description,
  info1,
  info2,
  info3,
  githubLink,
}: UserCardProps) {
  return (
    <Container>
      <div>
        <Header>
          <Image src={imgUrl} alt="" />
          <Bio>
            <Name>{name}</Name>
            <Description>{description}</Description>
            <Footer>
              <Info title={info1} icon={GithubLogo} />
              {info2 === undefined ? (
                <Info title={info2} icon={Buildings} />
              ) : (
                <></>
              )}

              <Info
                title={
                  info3 === 1 ? `${info3} seguidor` : `${info3} seguidores`
                }
                icon={Users}
              />
            </Footer>
          </Bio>
        </Header>
        <Link href={githubLink}>
          GITHUB <ArrowSquareOut />
        </Link>
      </div>
    </Container>
  )
}
