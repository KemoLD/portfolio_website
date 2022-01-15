import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
    <Layout title="Covid-19 Tracker">
        <Container maxW='container.md'>
            <Title>
                Covid-19 Tracker <Badge>2021</Badge>
            </Title>
            <P>
                A realtime COVID-19 cases, death and recoveries tracker. The website retrives data from the Disease.sh API.
                Not only does the website retrieve information for each country, but it display a world map to notices the difference
                between cases, recoveries and death in each country

            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="c-19-trackerr.netlify.app">
                        c-19-trackerr.netlify.app <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Source Code</Meta>
                    <Link href="https://github.com/KemoLD/Covid-19-tracker">
                        https://github.com/KemoLD/Covid-19-tracker <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Web</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>React, JavaScript </span>
                </ListItem>
            </List>

            <ProjectImage src="/images/projects/covid_tracker.png" alt="Covid tracker" />
            <ProjectImage src="/images/projects/covid_tracker1.png" alt="Covid tracker" />

        </Container>
    </Layout>
)

export default Project