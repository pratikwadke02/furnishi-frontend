// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'master',
    path: '/dashboard/master',
    icon: getIcon('eva:grid-outline'),
  },
  {
    title: 'enquiry',
    path: '/dashboard/enquiry',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'orderlist',
    path: '/dashboard/orderlist',
    icon: getIcon('eva:file-text-fill'),
  },
  // {
  //   title: 'furnishi order',
  //   path: '/dashboard/furnishiOrder',
  //   icon: getIcon('eva:file-text-fill'),
  // },
  {
    title: 'my orders',
    path: '/dashboard/myOrders',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'panel manager',
    path: '/dashboard/panelManager',
    icon: getIcon('eva:settings-2-fill'),
  },
  {
    title: 'snaglist',
    path: '/dashboard/snaglist',
    icon: getIcon('eva:file-text-fill'),
  },
  // {
  //   title: 'complaint',
  //   path: '/dashboard/complaintTicket',
  //   icon: getIcon('eva:file-text-fill'),
  // },
  // {
  //   title: 'survey',
  //   path: '/dashboard/surveyTicket',
  //   icon: getIcon('eva:file-text-fill'),
  // },
  // {
  //   title: 'payment',
  //   path: '/dashboard/payment',
  //   icon: getIcon('eva:file-text-fill'),
  // },
  // {
  //   title: 'customer',
  //   path: '/dashboard/customer',
  //   icon: getIcon('eva:file-text-fill'),
  // },
  {
    title: 'settings',
    path: '/dashboard/settings',
    icon: getIcon('eva:settings-2-fill'),
  },
];

export default navConfig;
