import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
    <Layout title="GitLab Analyzer">
        <Container maxW='container.md'>
            <Title>
                GitLab Analyzer <Badge>2021</Badge>
            </Title>
            <P>
                A complex analytics tool that measures individual Gitlab project contributions. Authentication is done through SFU's SSO server. 
                Users can analyze any repository on their server to analyze based on a date and time range. Individual contributions are measured in points, which are
                completely customizable, meaning that adding a newline or comment, deleting characters, or creating files are all awarded different points
                 based on the file type. File types are given weights, which are multiplied by the underlined contribitions. There is also a feature that allows certain file types 
                to be excluded from the score computation. The data is then sorted into graphs and charts. Scores are given to each user and can be by sorted by commits or a date-range. 
                There are additional features, such as viewing code diffs and notes per commit.

            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://git-lab-analyzer.vercel.app" target="_blank" rel='noopener noreferrer'>
                        https://git-lab-analyzer.vercel.app <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Source Code</Meta>
                    <Link href="https://github.com/KemoLD/Gitlab-Analyzer" target="_blank" rel='noopener noreferrer'>
                        https://github.com/KemoLD/Gitlab-Analyzer <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Web</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>React, Next.js, TypeScript, Spring Boot, Docker, Java, PostgreSQL </span>
                </ListItem>
            </List>

            <ProjectImage src="/images/projects/gitlab_analyzer.png" alt="Gitlab Analyzer" />
            <ProjectImage src="/images/projects/gitlab_analyzer1.png" alt="Gitlab Analyzer" />
            <ProjectImage src="/images/projects/gitlab_analyzer2.png" alt="Gitlab Analyzer" />
            <ProjectImage src="/images/projects/gitlab_analyzer3.png" alt="Gitlab Analyzer" />

        </Container>
    </Layout>
)

export default Project