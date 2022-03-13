import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import LeftLink from 'images/status1.png'
import BottomRightCorner from 'images/status1.png'
import Links from 'images/status1.png'

const useStyles = makeStyles((theme) => ({
  termsAndService: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    }
  },
  wrapper: {
    padding: '0 8%',
  },
  text: {
    fontSize: '12px',
    // marginTop: '3px',
  },
  service_padding: {
    padding: '0px !important',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Osiris !important'
  },
  linkWrapper: {
    width: 320,
    display: 'flex',
    [theme.breakpoints.down(768)]: {
      width: 150,
    }
  },
  stripe: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down(768)]: {
      display: 'none',
    }
  },
  footerLink: {
    width: 142,
    height: 66,
    display: 'flex'
  },
  linkImg: {
    height: '100%',
    width: '100%',
  },
}))

const Footer = () => {
  const classes = useStyles();

  return (
    <div>
      Footer
    </div>
  )
}

export default Footer;