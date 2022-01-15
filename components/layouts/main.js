import { Box, Container } from '@chakra-ui/react';
import NavBar from "../navbar.js"
import Head from 'next/head'
import VoxelEarthLoader from '../voxel-earth-loader'
import dynamic from 'next/dynamic'

const LazyVoxelEarth = dynamic(() => import('../voxel-earth'), {
    ssr: false,
    loading: () => <VoxelEarthLoader />
  })

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Kemo Sonko" />
                <title>Kemo Sonko</title>
            </Head>

            <NavBar path={router.asPath} />

            <Container maxW='container.md' pt={14}>
                <LazyVoxelEarth />
                {children}
            </Container>
        </Box>
    )
}

export default Main