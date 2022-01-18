import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import zoomin from '../public/images/projects/Zoom_in.png'
import parentingpro from '../public/images/projects/parentingpro.png'
import covidtracker from '../public/images/projects/covid_tracker.png'
import restaurant_website from '../public/images/projects/restaurant_website.png'
import zoombie from '../public/images/projects/zombie.png'
import gitlab_analyzer from '../public/images/projects/gitlab_analyzer.png'
import portfolio from '../public/images/projects/portfolio.png'
import { BioSection, BioYear } from '../components/bio'

const Projects = () => {

    return (
        <Layout>
            <Container maxW='container.md'>
                <Section>
                    <Heading as="h3" variant="section-title">
                        Tech Stack
                    </Heading>
                    <BioSection>
                        <BioYear>Front-End</BioYear>
                        React, Node, HTML, PHP, CSS, TypeScript, JavaScript
                    </BioSection>
                    <BioSection>
                        <BioYear>Back-End</BioYear>
                        Java, Python, C/C++, SQL, MySql
                    </BioSection>
                    <BioSection>
                        <BioYear>Skills</BioYear>
                        Figma, Android, Scrum framework, Agile development, API's, JUnit5 testing, PostMan, Data structures
                    </BioSection>
                </Section>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Featured Projects
                    </Heading>
                </Section>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.2}>
                        <ProjectGridItem id="zoom-in" title="Zoom-in" thumbnail={zoomin}>
                            Am image sharing platform similar to Pinterest
                        </ProjectGridItem>
                    </Section>
                    <Section delay={0.2}>
                        <ProjectGridItem
                            id="restaurant-website"
                            title="Restaurant Website"
                            thumbnail={restaurant_website}
                        >
                            A fully functional food ordering website, with an admin panel for managing food items, food categories and orders
                        </ProjectGridItem>
                    </Section>

                    <Section delay={0.3}>
                        <ProjectGridItem
                            id="gitlab-analyzer"
                            title="Gitlab Analyzer"
                            thumbnail={gitlab_analyzer}
                        >
                            A complex analatical tool for measuring gitlab project contributions
                        </ProjectGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <ProjectGridItem id="covid-19tracker" thumbnail={covidtracker} title="Covid Tracker">
                            A realtime COVID-19 cases, death and recoveries tracker
                        </ProjectGridItem>
                    </Section>

                    <Section delay={0.4}>
                        <ProjectGridItem id="parenting-pro" thumbnail={parentingpro} title="Parenting Pro">
                            An android parenting app that facilitates child management tasks for parents
                        </ProjectGridItem>
                    </Section>

                    <Section delay={0.4}>
                        <ProjectGridItem
                            id="zombie-sweeper"
                            title="Zombie Sweeper"
                            thumbnail={zoombie}
                        >
                            An android mineseeker game
                        </ProjectGridItem>
                    </Section>
                </SimpleGrid >
            </Container >
        </Layout>

    )

}

export default Projects