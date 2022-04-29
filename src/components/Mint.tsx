import React from 'react'
import Video from './Video'
import Navbar from './Navbar'
import { motion } from 'framer-motion'
import {
  Title,
  createStyles,
  SimpleGrid,
  Center,
  Paper,
  Group,
} from '@mantine/core'

export default function Roadmap() {
  const { classes } = useStyles()
  return (
    <>
      <Video />
      <div className={classes.mainWrapper}>
        <Paper className={classes.paper} shadow='md' radius='md' p='md'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            exit={{ opacity: 0 }}
          >
            <SimpleGrid cols={1}>
              <Center>
                <SimpleGrid cols={1}>
                  <Group position='center'>
                    <Title className={classes.title}>MINT</Title>
                  </Group>
                  <Navbar {...links} />
                </SimpleGrid>
              </Center>
            </SimpleGrid>
            <Group position='center'>
              <h1>People Will Mint here</h1>
            </Group>
          </motion.div>
        </Paper>
      </div>
    </>
  )
}

const useStyles = createStyles(() => ({
  mainWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    height: '100vh',
  },
  paper: {
    position: 'absolute',
    minHeight: 650,
    width: '70rem',
  },
  title: {
    fontFamily: 'Ubuntu',
  },

  nav: {
    display: 'flex',
    flexDirection: 'row',
  },
}))
const links = {
  links: [
    { label: 'Home', link: '/' },
    { label: 'Raodmap', link: '/roadmap' },
    { label: 'Mint', link: '/mint' },
    { label: 'FAQ', link: '/faq' },
  ],
}
