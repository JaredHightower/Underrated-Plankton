import React from 'react'
import Video from '../Video'
import Navbar from '../Navbar'
import { motion } from 'framer-motion'
import RoadmapCards from '../Raodmap/RoadmapCards'
import {
  Title,
  createStyles,
  SimpleGrid,
  Center,
  Paper,
  Overlay,
} from '@mantine/core'

export default function Roadmap() {
  const { classes } = useStyles()
  const orderListItems = roadMapList.map((items) => (
    <RoadmapCards description={items.task} title={items.title} />
  ))
  return (
    <>
      <Video />
      <Overlay opacity={0.6} color='#000' zIndex={-1} />
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
                  <Title className={classes.title} py={5}>
                    Road Map - Pre Mint{' '}
                  </Title>
                  <Navbar {...links} />
                </SimpleGrid>
              </Center>
              <SimpleGrid cols={3} px={30} py={10}>
                {orderListItems}
              </SimpleGrid>
            </SimpleGrid>
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
    fontFamily: 'Slackey',
    fontWeight: 400,
    color: '#0f0f0fe9',
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

const roadMapList = [
  {
    task: 'Present to the world the idea of truly making a positive impact on the planet by using NFT technology and art.',
    title: 'Completed',
  },
  {
    task: 'Show the NFT Community the problems we are trying to solve.',
    title: 'In Progress',
  },
  {
    task: ' Educate our community about Ocean conservation and Plankton lives. 💚',
    title: 'Completed',
  },
  {
    task: 'Give whitelist spots to our TRUE supporters and collaborating teams.',
    title: 'Completed',
  },
  {
    task: 'Disclose our utility.',
    title: 'Completed',
  },
  {
    task: 'Complete Underrated Plankton artwork.',
    title: 'In Progress',
  },
  {
    task: 'Post our website.',
    title: 'In Progress',
  },
  {
    task: 'Complete Underrated Plankton artwork.',
    title: 'Completed',
  },
  {
    task: 'MINT!!! 💚 💚 💚',
    title: 'In Progress',
  },
]
