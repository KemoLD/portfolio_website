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
                Users can pick any repository that on their server to analyze, as well as a date-time range. Individual contributions are measured in points, which is 
                completely customizable, meaning that adding a newline, comments, deleting characters and creating files are all awarded different points 
                based on the file type. File types are given weights, which are multiplied by the underlined contribitions. The data is then sorted into graphs and charts. 
                Scores are given to each user and can be by sorted by commits or date-range. There are additional features, such as viewing code diffs and notes per commit

            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://git-lab-analyzer.vercel.app">
                        https://git-lab-analyzer.vercel.app <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Source Code</Meta>
                    <Link href="https://github.com/KemoLD/Gitlab-Analyzer">
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