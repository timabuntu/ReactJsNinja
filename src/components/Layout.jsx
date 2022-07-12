import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

export function Layout() {
  return (
    <div className='flex flex-col min-h-screen bg-neutral-800'>
      <header className='py-4 border-b border-neutral-700'>
        <h1 className='text-2xl font-bold text-center capitalize text-neutral-300'>
          React Ninja
        </h1>
      </header>
      <div className='flex flex-1'>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
