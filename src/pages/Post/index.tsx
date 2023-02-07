import { PostNameCard } from '../../components/PostNameCard'
import { Container, PostContent } from './styles'

export function Post() {
  return (
    <Container>
      <PostNameCard />
      <PostContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        tenetur maxime quo nam, quam quas veritatis sapiente ratione esse
        necessitatibus impedit quisquam, maiores accusantium atque fuga nesciunt
        neque cumque eos. Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Minima cum aliquam, velit quod sequi error officiis iste maiores
        voluptates sint enim ipsum quos ipsa neque officia necessitatibus quas
        molestiae sed. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Corporis totam nesciunt nisi cupiditate animi temporibus, sit error
        accusamus possimus nemo voluptates cumque suscipit quae veritatis
        voluptatibus dolor repellat quia consectetur.
      </PostContent>
    </Container>
  )
}
