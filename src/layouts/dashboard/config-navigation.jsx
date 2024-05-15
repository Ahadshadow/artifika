import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('dashboard'),
  },
  {
    title: 'Conversation History',
    path: '/user',
    icon: icon('chat'),
  },
  {
    title: 'Leads',
    // path: '/products',
    icon: icon('lead'),
  },
  {
    title: 'Feedbacks',
    // path: '/blog',
    icon: icon('feedback'),
  },
  {
    title: 'Sources',
    // path: '/login',
    icon: icon('source'),
  },
  {
    title: 'Settings / Appearance',
    // path: '/login',
    icon: icon('setting'),
  },
  {
    title: 'Preview',
    // path: '/login',
    icon: icon('preview'),
  },
];

export default navConfig;
