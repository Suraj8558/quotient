import DashboardTabs from "@/component/base/DashboardTabs";
import RecentActivities from "@/component/charts/Activities/RecentActivities";
import OrderStatusChart from "@/component/charts/OrderStatusChart";
import RevenueChart from "@/component/charts/RevenueChart";
import Layout from "@/component/Layout/Layout";
import RecentOrders from "@/component/order/RecentOrders";
import RecentTransactions from "@/component/order/RecentTransactions";
import { Box, Typography } from "@mui/material";


export default function DashboardPage() {
  return (
    <Layout>
      <DashboardTabs />
      <Box sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 2,
        my: 2,
      }}>
        <OrderStatusChart />
        <RecentActivities />
      </Box>
       <Box sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 2
      }}>
        <RecentOrders />
        <RecentTransactions />
      </Box>

             <Box sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 2
      }}>
        <RevenueChart />
        <RecentTransactions />
      </Box>
      
    </Layout>
  );
}
