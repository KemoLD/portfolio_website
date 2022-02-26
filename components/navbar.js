import React from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub, IoLogoLinkedin, IoDocumentText } from 'react-icons/io5'

const LinkItem = ({ href, path, _target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
        <NextLink href={href} passHref>
            <Link
                p={2}
                bg={active ? 'grassTeal' : undefined}
                color={active ? '#202023' : inactiveColor}
                _target={_target}
                {...props}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            css={{ backdropFilter: 'blur(10px)' }}
            zIndex={1}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href="/projects" path={path}>
                        Projects
                    </LinkItem>
                    <LinkItem href="/certifications" path={path}>
                        Certifications
                    </LinkItem>
                    <a target='_blank'
                        rel='noopener noreferrer'
                        href="https://www.linkedin.com/in/kemo-sonko"
                        style={{ paddingLeft: 13, gap: 4, alignItems: 'center', display: 'inline-flex' }}
                    >
                        <IoLogoLinkedin />
                        LinkedIn
                        <ExternalLinkIcon mx="0px" w={2} h={2} />
                    </a>
                    <a target='_blank'
                        rel='noopener noreferrer'
                        href="https://github.com/KemoLD"
                        style={{ paddingLeft: 13, gap: 4, alignItems: 'center', display: 'inline-flex' }}
                    >
                        <IoLogoGithub />
                        Github
                        <ExternalLinkIcon mx="0px" w={2} h={2} />
                    </a>
                    <a target='_blank'
                        rel='noopener noreferrer'
                        href="kemo_sonko_resume.pdf"
                        style={{ paddingLeft: 13, gap: 4, alignItems: 'center', display: 'inline-flex' }}
                    >
                        <IoDocumentText />
                        Resume
                        <ExternalLinkIcon mx="0px" w={2} h={2} />
                    </a>
                </Stack>

                <Box flex={1} align="right">

                    <ThemeToggleButton />

                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu isLazy id="navbar-menu">
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>About</MenuItem>
                                </NextLink>
                                <NextLink href="/projects" passHref>
                                    <MenuItem as={Link}>Projects</MenuItem>
                                </NextLink>
                                <NextLink href="/certifications" passHref>
                                    <MenuItem as={Link}>Certifications</MenuItem>
                                </NextLink>
                                <MenuItem
                                    as={Link}
                                    href="https://www.linkedin.com/in/kemo-sonko"
                                    isExternal
                                >
                                    <IoLogoLinkedin />
                                    LinkedIn
                                    <ExternalLinkIcon mx="2px" w={3} h={3} />
                                </MenuItem>
                                <MenuItem
                                    as={Link}
                                    href="https://github.com/KemoLD"
                                    isExternal
                                >
                                    <IoLogoGithub />
                                    Github
                                    <ExternalLinkIcon mx="2px" w={3} h={3} />
                                </MenuItem>
                                <MenuItem
                                    as={Link}
                                    href="kemo_sonko_resume.pdf"
                                    isExternal
                                >
                                    <IoDocumentText />
                                    Resume
                                    <ExternalLinkIcon mx="2px" w={3} h={3} />
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box >
    )
}

export default Navbar