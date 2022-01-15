import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
    <Layout title="Zombie Sweeper">
        <Container maxW='container.md'>
            <Title>
                Zombie Sweeper <Badge>2020</Badge>
            </Title>
            <P>
                An android Mine seeker game. In this game, there are zombies hidden in tombs, it is the players job to find as my zombies
                in the fewest clicks. TTo make things more exitingg, there is a "scanning feature" that reveals the amount of zombies
                hidden in the row and column of the clicked tomb. The board size and amount of zombies are customizable

            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Source Code</Meta>
                    <Link href="https://github.com/KemoLD/Zombie-Sweeper">
                        https://github.com/KemoLD/Zombie-Sweeper <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Android</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Java </span>
                </ListItem>
            </List>
        </Container>

        <Container maxH='container.sm'>
            <ProjectImage src="/images/projects/zombie1.png" alt="Zombie Sweeper" />
            <ProjectImage src="/images/projects/zombie3.png" alt="Zombie Sweeper" />
            <ProjectImage src="/images/projects/zombie4.png" alt="Zombie Sweeper" />
            <ProjectImage src="/images/projects/zombie2.png" alt="Zombie Sweeper" />
            <ProjectImage src="/images/projects/zombie5.png" alt="Zombie Sweeper" />
        </Container>

    </Layout>
)

export default Project