import React from 'react'
import video from './assets/waveWithTrash.mp4'
import { createStyles } from '@mantine/core'

const useStyles = createStyles(() => ({
  video: {
    position: 'fixed',
    zIndex: -1,
  },
}))

export default function Video() {
  const { classes } = useStyles()
  return (
    <>
      <video
        className={classes.video}
        autoPlay
        loop
        muted
        poster='../components/assets/staticWaveWithTrash.png'
      >
        <source src={`${video}`} type='video/mp4'></source>
      </video>
    </>
  )
}
