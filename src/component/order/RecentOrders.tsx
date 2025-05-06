'use client';

import {
  Avatar,
  Box,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from '@mui/material';

const orders = [
  {
    id: '275936',
    quantity: 'x1',
    product: 'iPhone 15 pro max',
    image: '/products/iphone.png',
    channel: { name: 'eBay', logo: '/logos/ebay.png' },
    customer: { name: 'Gabriella', avatar: '/avatars/gabriella.png' },
    total: '$400.00',
  },
  {
    id: '415368',
    quantity: 'x4',
    product: 'White Danim Tshit M...',
    image: '/products/shirt.png',
    channel: { name: 'Walmart', logo: '/logos/walmart.png' },
    customer: { name: 'Harris Sam', avatar: '/avatars/harris.png' },
    total: '$151.00',
  },
  {
    id: '275063',
    quantity: 'x2',
    product: 'David Beckham class...',
    image: '/products/perfume.png',
    channel: { name: 'Facebook', logo: '/logos/facebook.png' },
    customer: { name: 'Lilia Ponce', avatar: '/avatars/lilia.png' },
    total: '$167.00',
  },
  {
    id: '274778',
    quantity: 'x3',
    product: 'Samsung i-20 series sm...',
    image: '/products/samsung.png',
    channel: { name: 'Amazon', logo: '/logos/amazon.png' },
    customer: { name: 'Rehan Chaudhary', avatar: '/avatars/rehan.png' },
    total: '$262.00',
  },
  {
    id: '638032',
    quantity: 'x5',
    product: 'Nykaa Red lipstick',
    image: '/products/lipstick.png',
    channel: { name: 'Etsy', logo: '/logos/etsy.png' },
    customer: { name: 'Maxim Brown', avatar: '/avatars/maxim.png' },
    total: '$319.00',
  },
];

export default function RecentOrders() {
  return (
    <Card sx={{ borderRadius: 4 }}>
      <CardContent>
        <Typography variant="h6" fontWeight={600} mb={2}>
          Recent Orders
        </Typography>

        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>ORDER ID</TableCell>
                <TableCell>PRODUCTS</TableCell>
                <TableCell>CHANNEL</TableCell>
                <TableCell>CUSTOMER</TableCell>
                <TableCell align="right">TOTAL</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order, index) => (
                <TableRow key={index}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>
                    <Box display="flex" alignItems="center" gap={1.5}>
                      <Avatar
                        src={order.image}
                        alt={order.product}
                        variant="rounded"
                        sx={{ width: 32, height: 32 }}
                      />
                      <Box>
                        <Typography variant="body2" noWrap>
                          {order.product}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {order.quantity}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Avatar src={order.channel.logo} alt={order.channel.name} sx={{ width: 24, height: 24 }} />
                  </TableCell>
                  <TableCell>
                    <Box display="flex" alignItems="center" gap={1.5}>
                      <Avatar src={order.customer.avatar} alt={order.customer.name} sx={{ width: 24, height: 24 }} />
                      <Typography variant="body2" noWrap>
                        {order.customer.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="right">
                    <Typography fontWeight={600}>{order.total}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box mt={2} display="flex" justifyContent="center">
          <Button size="small" sx={{ fontSize: 12 }} endIcon={<span>→</span>}>
            View 256 more orders
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
