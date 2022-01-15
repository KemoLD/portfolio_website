import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
    <Layout title="Restaurant Website">
        <Container maxW='container.md'>
            <Title>
                Restaurant Website <Badge>2022</Badge>
            </Title>
            <P>
                A a fully functional food ordering website. It includes an admin panel that allows C.R.U.D operation on items 
                and categories displayed, as well as updating statuses for orders. Food Items and categoirs have "active" and 
                "featured" labels; if they are not active they will not be displayed, and if they are feautured, they will be 
                 displayed on the front page. The website also tracks revenue generated for delivered orders, which I think is a
                 really cool feature. All data is stored in a MySQL database. The admin panel is secured by access control and 
                 admin passwords are encrypted.

            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://kemos-restaurant.herokuapp.com">
                        https://kemos-restaurant.herokuapp.com/ <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Source Code</Meta>
                    <Link href="https://github.com/KemoLD/restaurant_website">
                        https://github.com/KemoLD/restaurant_website <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Web</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>HTML, PHP, CSS, MySQL </span>
                </ListItem>
            </List>

            <ProjectImage src="/images/projects/restaurant_website.png" alt="restaurant-website" />
            <ProjectImage src="/images/projects/restaurant_website1.png" alt="restaurant-website" />
            <ProjectImage src="/images/projects/restaurant_website2.png" alt="restaurant-website" />
            <ProjectImage src="/images/projects/restaurant_website3.png" alt="restaurant-website" />
            <ProjectImage src="/images/projects/restaurant_website4.png" alt="restaurant-website" />
            <ProjectImage src="/images/projects/restaurant_website5.png" alt="restaurant-website" />
            <ProjectImage src="/images/projects/restaurant_website6.png" alt="restaurant-website" />
            <ProjectImage src="/images/projects/restaurant_website7.png" alt="restaurant-website" />
            <ProjectImage src="/images/projects/restaurant_website8.png" alt="restaurant-website" />

        </Container>
    </Layout>
)

export default Project