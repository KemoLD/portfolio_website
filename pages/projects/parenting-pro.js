import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
    <Layout title="Parenting Pro">
        <Container maxW='container.md'>
            <Title>
                Parenting Pro <Badge>2020</Badge>
            </Title>
            <P>
                An android parenting app that facilitates child management tasks for parents. The app allows parents to set up profiles
                for their children to assign chores, create timers, and even perform a healthy breathing exercise. Additionally, there 
                is a "flip coin" functionality to settle child disputes.

            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Source Code</Meta>
                    <Link href="https://github.com/KemoLD/Parenting-App" target="_blank" rel='noopener noreferrer'>
                        https://github.com/KemoLD/Parenting-App <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Android</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Java</span>
                </ListItem>
            </List>
        </Container>

        <Container maxH='container.sm'>
            <ProjectImage src="/images/projects/parenting_pro1.png" alt="Parenting Pro" />
            <ProjectImage src="/images/projects/parenting_pro2.png" alt="Parenting Pro" />
            <ProjectImage src="/images/projects/parenting_pro3.png" alt="Parenting Pro" />
            <ProjectImage src="/images/projects/parenting_pro4.png" alt="Parenting Pro" />
            <ProjectImage src="/images/projects/parenting_pro5.png" alt="Parenting Pro" />
            <ProjectImage src="/images/projects/parenting_pro6.png" alt="Parenting Pro" />
        </Container>
    </Layout>
)

export default Project