import React, { useState, useRef, useEffect } from 'react';
import SideMenu from './SideMenu';
import { Link } from 'react-router-dom';

const Header = ({ pageNum }: any) => {
  const [menus, setMenus] = useState(false);
  const [headerColor, setHeaderColor] = useState(false);

  const menuOpen = () => {
    setMenus(true);
  };

  // const navbar = document.querySelector('.navbar');
  // const navbarHeight = navbar?.getBoundingClientRect().height;

  document.addEventListener('scroll', () => {
    if (window.scrollY > 80 || window.scrollY > 160) {
      setHeaderColor(true);
    } else {
      setHeaderColor(false);
    }
  });

  // useEffect(() => {
  //   console.log(pageNum);

  //   switch (pageNum) {
  //     case 1:
  //       setHeaderColor(false);
  //       break;
  //     case 2:
  //       setHeaderColor(true);
  //       break;
  //     case 3:
  //       setHeaderColor(true);
  //       break;
  //     default:
  //       null;
  //       break;
  //   }
  // }, [pageNum]);

  return (
    <div className={`header-div`}>
      <header className="w-full navbar">
        <div
          className={`header-bg transition duration-300 ease-in-out ${
            headerColor ? `bg-white drop-shadow-md` : `backdrop-blur-md`
          }`}
        >
          <a className="mb-4 wrap md:mb-0">
            <img className="logo" src="/img/icon.png" alt="로고 이미지" />
            <span className="logo-span">푸르댕댕</span>
          </a>
          <nav className="nav">
            <Link to="/" className="header-link">
              First Link
            </Link>
            <Link to="/" className="header-link">
              Second Link
            </Link>
            <Link to="/account" className="header-link">
              로그인
            </Link>
            <Link to="/account/register" className="header-link">
              회원가입
            </Link>
          </nav>
          <button className="header-btn" onClick={() => menuOpen()}>
            <i className="text-green-500 fas fa-bars"></i>
          </button>
        </div>
      </header>
      <div className="absolute right-0">
        <SideMenu menu={menus} selectMenu={setMenus} />
      </div>
    </div>
  );
};

export default Header;