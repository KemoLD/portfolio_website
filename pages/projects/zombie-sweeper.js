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
                An android Mine seeker game. In this game, there are zombies hidden in tombs, and it is the players job to find as many zombies
                in the fewest amount of taps. To make things more exciting, there is a "scanning feature" that reveals the amount of zombies
                hidden in the row and column of the tapped tomb. The board size and amount of zombies are all completely customizable.

            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Source Code</Meta>
                    <Link href="https://github.com/KemoLD/Zombie-Sweeper" target="_blank" rel='noopener noreferrer'>
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