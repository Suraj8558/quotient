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

const transactions = [
  {
    id: '#123-456-7890',
    quantity: 'x1',
    product: 'iPhone 15 pro max',
    image: '/products/iphone.png',
    channel: { name: 'eBay', logo: '/logos/ebay.png' },
    customer: { name: 'Gabriella', avatar: '/avatars/gabriella.png' },
    total: '$400.00',
  },
  {
    id: '#123-456-7890',
    quantity: 'x4',
    product: 'White Danim Tshit M Size',
    image: '/products/shirt.png',
    channel: { name: 'Walmart', logo: '/logos/walmart.png' },
    customer: { name: 'Harris Sam', avatar: '/avatars/harris.png' },
    total: '$151.00',
  },
  {
    id: '#123-456-7890',
    quantity: 'x2',
    product: 'David Beckham classic Blue...',
    image: '/products/perfume.png',
    channel: { name: 'Facebook', logo: '/logos/facebook.png' },
    customer: { name: 'Lilia Ponce', avatar: '/avatars/lilia.png' },
    total: '$167.00',
  },
  {
    id: '#123-456-7890',
    quantity: 'x3',
    product: 'Samsung i-20 series smart...',
    image: '/products/samsung.png',
    channel: { name: 'Amazon', logo: '/logos/amazon.png' },
    customer: { name: 'Rehan Chaudhary', avatar: '/avatars/rehan.png' },
    total: '$262.00',
  },
  {
    id: '#123-456-7890',
    quantity: 'x5',
    product: 'Nykaa Red lipstick',
    image: '/products/lipstick.png',
    channel: { name: 'Etsy', logo: '/logos/etsy.png' },
    customer: { name: 'Maxim Brown', avatar: '/avatars/maxim.png' },
    total: '$319.00',
  },
];

export default function RecentTransactions() {
  return (
    <Card sx={{ borderRadius: 4,

       border: "1px solid #0E253C1A",
        maxHeight: 416,
        overflowY: "hidden",
    }}>
      <CardContent>
        <Typography variant="h6" fontWeight={600} mb={2}>
          Recent Transactions
        </Typography>

        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>TRANSACTION ID</TableCell>
                <TableCell>PRODUCTS</TableCell>
                <TableCell>CHANNEL</TableCell>
                <TableCell>CUSTOMER</TableCell>
                <TableCell align="right">TOTAL</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>
                    <Box display="flex" alignItems="center" gap={1.5}>
                      <Avatar
                        src={item.image}
                        alt={item.product}
                        variant="rounded"
                        sx={{ width: 32, height: 32 }}
                      />
                      <Box>
                        <Typography variant="body2" noWrap>
                          {item.product}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {item.quantity}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Avatar src={item.channel.logo} alt={item.channel.name} sx={{ width: 24, height: 24 }} />
                  </TableCell>
                  <TableCell>
                    <Box display="flex" alignItems="center" gap={1.5}>
                      <Avatar src={item.customer.avatar} alt={item.customer.name} sx={{ width: 24, height: 24 }} />
                      <Typography variant="body2" noWrap>
                        {item.customer.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="right">
                    <Typography fontWeight={600}>{item.total}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box mt={2} display="flex" justifyContent="center">
          <Button size="small" sx={{ fontSize: 12 }} endIcon={<span>→</span>}>
            View 256 more transactions
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
