import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="Zoom-in">
    <Container maxW='container.md'>
      <Title>
        Zoom-in <Badge>2021</Badge>
      </Title>
      <P>
        An Image sharing and downloading website similar to Pinterest, utilizing sanity IO. It implements sign in through Google Auth.

      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://zoom-in.netlify.app" target="_blank" rel='noopener noreferrer'>
            https://zoom-in.netlify.app <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link href="https://github.com/KemoLD/Media-website" target="_blank" rel='noopener noreferrer'>
            https://github.com/KemoLD/Media-website <ExternalLinkIcon mx="2px" />
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

      <ProjectImage src="/images/projects/Zoom-in4.png" alt="Zoom-in" />
      <ProjectImage src="/images/projects/Zoom-in1.png" alt="Zoom-in" />
      <ProjectImage src="/images/projects/Zoom-in2.png" alt="Zoom-in" />
      <ProjectImage src="/images/projects/Zoom-in3.png" alt="Zoom-in" />

    </Container>
  </Layout>
)

export default Project