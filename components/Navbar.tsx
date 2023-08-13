import React from 'react';
import Container from '@/components/ui/container';
import Link from 'next/link';
import MainNav from '@/components/MainNav';
import GetCategories from '@/actions/get-categories';
import NavbarActions from './NavbarActions';

export const revalidate = 0;

const Navbar = async () => {
  const categories = await GetCategories();

  return (
    <div className="border-b">
      <Container>
        <div className=" relative px-4 sm:px-6 flex h-16 items-center">
          <Link href="/" className="mt-4 flex lg:ml-0 gap-2">
            <p className=" font-bold text-xl">STORE</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
