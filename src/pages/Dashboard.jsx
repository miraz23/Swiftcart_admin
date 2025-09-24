import React from 'react';
import SidebarWithHeader from '../components/SidebarWithHeader'
import DashboardCards from '../components/DashboardCards'
import OrdersTable from '../components/OrdersTable'
import { useOrderContext } from '../contexts/order_context';

export default function Dashboard() {
  const { recent_orders } = useOrderContext();
  return (
    <SidebarWithHeader>
      <DashboardCards />
      <OrdersTable orders={recent_orders} />
    </SidebarWithHeader>
  );
}
