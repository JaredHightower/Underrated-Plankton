import React from 'react'
import { Link } from 'react-router-dom'
import { createStyles, Anchor, Text, List } from '@mantine/core'
interface NavBarLinks {
  links: { label: string; link: string }[]
}

const useStyles = createStyles(() => ({
  nav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ul: {
    listStyle: 'none',
  },
}))

export default function Navbar({ links }: NavBarLinks) {
  const { classes } = useStyles()
  const items = links.map((link) => (
    <List className={classes.ul} key={link.label}>
      <Anchor component={Link} to={link.link}>
        <List.Item>
          <Text color='dimmed' px={15}>
            {link.label}
          </Text>
        </List.Item>
      </Anchor>
    </List>
  ))
  return <div className={classes.nav}>{items}</div>
}
