import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
interface CartItem {
  id: string
  name: string
  image: string
  quantity: number
  price: number
}

interface CartProps {
  cartItems: CartItem[]
}

export default function Cart({ cartItems }: CartProps) {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {cartItems.map((item) => (
        <ListItem key={item.id}>
          <ListItemAvatar>
            <Avatar alt={item.name} src={item.image} />
          </ListItemAvatar>
          <ListItemText
            primary={item.name}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Cantidad: {item.quantity}
                </Typography>
                {' - $' + item.price}
              </React.Fragment>
            }
          />
        </ListItem>
      ))}
    </List>
  )
}
