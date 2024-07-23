'use client';

import ClickOutside from '@/components/ClickOutside';
import SidebarItem from '@/components/Sidebar/SidebarItem';
import useLocalStorage from '@/hooks/useLocalStorage';
import Link from 'next/link';
import ButtonDefault from '../Buttons/ButtonDefault';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

interface MenuItem {
  icon?: JSX.Element;
  label: string;
  route: string;
  children?: MenuItem[];
}

interface MenuGroup {
  name: string;
  menuItems: MenuItem[];
}

const menuGroups: MenuGroup[] = [
  {
    name: 'Watches',
    menuItems: [
      {
        icon: <i className='fa-solid fa-tv'></i>,
        label: 'Monitors',
        route: '/',
      },
      {
        icon: <i className='fa-solid fa-people-group'></i>,
        label: 'Teams',
        route: '/teams',
      },
    ],
  },
  {
    name: 'Accounts',
    menuItems: [
      {
        icon: <i className='fa-solid fa-gear'></i>,
        label: 'Settings',
        route: '/settings',
      },
      {
        icon: <i className='fa-regular fa-credit-card'></i>,
        label: 'Billing',
        route: '/billing',
      },
    ],
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const [pageName, setPageName] = useLocalStorage('selectedMenu', 'dashboard');
  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden border-r border-stroke bg-white dark:border-stroke-dark dark:bg-gray-dark lg:static lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0 duration-300 ease-linear' : '-translate-x-full'
        }`}>
        {/* <!-- SIDEBAR HEADER --> */}
        <div className='flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5 xl:py-10'>
          <Link href='/'>
            <h1 className='text-3xl'>WebKoa</h1>
          </Link>

          <button onClick={() => setSidebarOpen(!sidebarOpen)} className='block lg:hidden'>
            <i className='fa-solid fa-arrow-left text-2xl'></i>
          </button>
        </div>
        {/* <!-- SIDEBAR HEADER --> */}

        <div className='no-scrollbar flex flex-grow flex-col overflow-y-auto duration-300 ease-linear'>
          {/* <!-- Sidebar Menu --> */}
          <div className='flex flex-col h-full justify-between'>
            <nav className='mt-1 px-4 lg:px-6'>
              <ButtonDefault label='New Watch' link='/' customClasses='bg-primary rounded-lg text-white py-[11px] w-full mb-7'>
                <i className='fa-solid fa-plus'></i>
              </ButtonDefault>
              {menuGroups.map((group, groupIndex) => (
                <div key={groupIndex}>
                  <h3 className='mb-5 text-sm font-medium text-dark-4 dark:text-dark-6'>{group.name}</h3>
                  <ul className='mb-6 flex flex-col gap-2'>
                    {group.menuItems.map((menuItem, menuIndex) => (
                      <SidebarItem key={menuIndex} item={menuItem} pageName={pageName} setPageName={setPageName} />
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
