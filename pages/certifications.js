import { Container, Heading, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Section from '../components/section'
import { Title, Meta } from '../components/project'
import { ProjectGridItem } from '../components/grid-item'
import P from '../components/paragraph'
import Layout from '../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Certification = () => {

    return (
        <Layout>
            <Container maxW='container.md'>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title" fontSize={20} mb={4}>
                        Certifications
                    </Heading>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h4" size='md'>
                        EA Software Engineering Virtual Experience Program <Badge>Jan 2022</Badge>
                    </Heading>
                    <P>
                        As part of the program, I reviewed open-source implementations of PacMan and created a new game called Vax-man 
                        by incorporating a different set of mechanics, which each  presented their own set of challenges in regards to 
                        performance and inclusion of concurrency, in both Python and C++. I learned about game engine technologies used 
                        in the gaming industry, such as FrostBite and Unreal Technologies. I also Learned about common cyber security 
                        vulnerabilities such as stack buffer overflow and the Heartbleed bug, as well as how to mitigate them.
                    </P>
                    <List ml={4} mb={4}>
                        <ListItem>
                            <Meta>Source Code</Meta>
                            <Link href="https://github.com/KemoLD/EA-forage-exercises">
                                https://github.com/KemoLD/EA-forage-exercises <ExternalLinkIcon mx="2px" />
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>

    )

}

export default Certification