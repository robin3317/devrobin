import Link from 'next/link';
import RouteData from '../../shared/routeData';

const SideDrawer = ({ isOpen, toggleSideDrawerHandler }) => {
  return (
    <nav className={`sidedrawer-container ${isOpen ? 'tl-x0' : 'tl-x105'}`}>
      <span className="close" onClick={toggleSideDrawerHandler}>
        &#x274C;
      </span>
      <p className="brand-name">Abdur Rahman Robin</p>

      <ul className="route-ulist">
        {RouteData.map((item, index) => (
          <li className="route-list" key={index}>
            <Link href={item.path} passHref>
              <a>{item.route}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideDrawer;
