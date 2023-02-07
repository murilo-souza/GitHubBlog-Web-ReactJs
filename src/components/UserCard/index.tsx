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

export function UserCard() {
  return (
    <Container>
      <div>
        <Header>
          <Image src="https://github.com/murilo-souza.png" alt="" />
          <Bio>
            <Name>Murilo Souza</Name>
            <Description>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              qui, facilis molestias itaque modi deleniti animi eos tempore
              voluptate vel distinctio, explicabo, quos dolores eligendi non
              eius. Necessitatibus, nihil nam?
            </Description>
            <Footer>
              <Info title="murilo-souza" icon={GithubLogo} />
              <Info title="murilo-souza" icon={Buildings} />
              <Info title="13 seguidores" icon={Users} />
            </Footer>
          </Bio>
        </Header>
        <Link>
          GITHUB <ArrowSquareOut />
        </Link>
      </div>
    </Container>
  )
}
