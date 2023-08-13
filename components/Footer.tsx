import React from 'react';

interface Props {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-white border-1 ">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
          &copy; {new Date().getFullYear()} FakeStoreName, Inc, All rights
          reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
