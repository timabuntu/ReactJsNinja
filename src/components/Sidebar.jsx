import { Link } from 'react-router-dom';
import { UseState } from '../pages/UseState';

export function Sidebar() {
  return (
    <aside className='w-[300px] min-h-full p-6 bg-neutral-800 border-r border-neutral-700'>
      <span className='block pb-6 text-2xl border-b border-neutral-700 text-neutral-100'>
        Hooks
      </span>
      <section className='mt-4'>
        <Link to='/usestate' className='text-neutral-300'>
          useState
        </Link>
      </section>
    </aside>
  );
}
