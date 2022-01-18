import NextLink from 'next/link'
import {
    Link,
    Container,
    Heading,
    Box,
    Image,
    Button,
    useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'


const Page = () => {

    return (
        <Layout>
            <Container maxW='container.md'>
                <Box display='flex' align="center" alignItems='center' justifyContent='center'>
                    <Box
                        align="center"
                        maxW="sm"
                        borderRadius="lg"
                        mb={6}
                        p={3}
                        textAlign="center"
                        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                    >
                        Hello, welcome to my personal website!
                    </Box>
                </Box>

                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Kemo Sonko
                        </Heading>
                        <p>Tech Enthusiast, World-Traveller, Developer, Student-Athlete, and Humanitarian</p>
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        textAlign="center"
                    >
                        <Image
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/pp1.jfif"
                            alt="Profile image"
                        />
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        About
                    </Heading>
                    <Paragraph>
                        I am an observant and motivated student seeking to gain work experience in the computing industry.
                        Being a student-athlete on Simon Fraser University's men's basketball team(NCAA DII) with 25+ weekly hours,
                        I am accustomed to being in a competitive atmosphere and working hard to achieve my goals, all while utlizing my
                        time management skills to maintain a high academic standard. I am currently pursuing a Bachelor of Applied
                        Science - BASc focused in Computer Science.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/projects">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                Portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Timeline
                    </Heading>
                    <BioSection>
                        <BioYear>2018</BioYear>
                        Enrolled at Rochester Institute of Technology and pursued a BsC in Computing Security
                    </BioSection>
                    <BioSection>
                        <BioYear>2019</BioYear>
                        Transfered to Simon Fraser University, and switched to a BsC in Computing Science
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        Product Manager Intern at Wenso Ltd
                    </BioSection>
                    <BioSection>
                        <BioYear>2023</BioYear>
                        Expected graduation date
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Hobbies
                    </Heading>
                    <Paragraph>
                        In my free time, I like to play basketball or go to the gym. I have also been an active member of {' '}
                        <Link href="http://heenointernational.com/" target="_blank" rel='noopener noreferrer'>
                            Heeno International
                        </Link>
                        , since 2011, and have participated in major projects throughout Africa.
                    </Paragraph>
                </Section>



            </Container>
        </Layout>
    )
}

export default Page