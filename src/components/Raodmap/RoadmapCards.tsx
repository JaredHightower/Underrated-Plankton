import React from 'react'
import { createStyles, Paper, Text, ThemeIcon } from '@mantine/core'
import { Loader, Checks } from 'tabler-icons-react'

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'transform 150ms ease, box-shadow 100ms ease',
    padding: theme.spacing.xl,
    paddingLeft: theme.spacing.xl * 2,

    '&:hover': {
      boxShadow: theme.shadows.md,
      transform: 'scale(1.02)',
    },

    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: 6,
      backgroundImage: theme.fn.linearGradient(
        0,
        theme.colors.teal[1],
        theme.colors.teal[3]
      ),
    },
  },
}))

interface CardGradientProps {
  title: string
  description: string
}

export default function RoadmapCards({
  title,
  description,
}: CardGradientProps) {
  const { classes } = useStyles()
  return (
    <Paper withBorder radius='md' className={classes.card}>
      <ThemeIcon
        size='xl'
        radius='md'
        variant='gradient'
        gradient={{ deg: 0, from: '#CDF8EB', to: '#87F6B8' }}
      >
        {title === 'Completed' ? (
          <Checks color='#00062b' size={28} />
        ) : (
          <Loader color='#00062b' size={28} />
        )}
      </ThemeIcon>
      <Text size='xl' weight={500} mt='md'>
        {title}
      </Text>
      <Text size='sm' mt='sm' color='dimmed'>
        {description}
      </Text>
    </Paper>
  )
}
