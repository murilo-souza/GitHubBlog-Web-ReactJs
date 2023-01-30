import { ArrowSquareOut } from 'phosphor-react'
import { Container, Description, Header, Image, Link, Name } from './styles'

export function UserCard() {
  return (
    <Container>
      <div>
        <Header>
          <Image src="https://github.com/murilo-souza.png" alt="" />
          <Name>Murilo Souza</Name>
        </Header>
        <Link>
          GITHUB <ArrowSquareOut />
        </Link>
      </div>
      <Description>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
        tempore earum et optio aspernatur quisquam consequuntur cumque quo
        labore reprehenderit ea, dicta quam cum, nemo eos temporibus blanditiis
        rem hic?
      </Description>
    </Container>
  )
}
