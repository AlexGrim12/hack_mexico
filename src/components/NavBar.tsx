'use client'
import * as React from 'react'
import Link from 'next/link'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer,
  IconButton,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7' // Icono para el modo claro
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const SidebarMenu: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  const [darkMode, setDarkMode] = React.useState(false) // Estado para el modo oscuro

  const toggleDrawer = () => {
    setOpen(!open)
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode) // Cambiar el estado del modo oscuro
  }

  return (
    <React.Fragment>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <List>
          <ListItem button component={Link} href="/">
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Compra" />
          </ListItem>
          <ListItem button component={Link} href="/sellpage">
            <ListItemIcon>
              <MonetizationOnIcon />
            </ListItemIcon>
            <ListItemText primary="Vender" />
          </ListItem>
          {/* Agregar el enlace de inicio de sesión */}
          <ListItem button component={Link} href="/login">
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Iniciar sesión" />
          </ListItem>
        </List>
        <Divider />
        {/* <List>
          <ListItem button onClick={toggleDarkMode}>
            <ListItemIcon>
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </ListItemIcon>
            <ListItemText primary={darkMode ? 'Modo claro' : 'Modo oscuro'} />
          </ListItem>
        </List> */}
      </Drawer>
    </React.Fragment>
  )
}

export default SidebarMenu
