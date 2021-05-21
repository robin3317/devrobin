import Link from 'next/link';
import {
  NavContainer,
  CloseSideDrawer,
  BrandName,
  RouteUList,
  RouteList,
} from './SideDrawer.styles';
import RouteData from '../../shared/routeData';

const SideDrawer = ({ isOpen, toggleSideDrawerHandler }) => {
  return (
    <NavContainer isOpen={isOpen}>
      <CloseSideDrawer onClick={toggleSideDrawerHandler}>
        &#x274C;
      </CloseSideDrawer>
      <BrandName>Abdur Rahman Robin</BrandName>

      <RouteUList>
        {RouteData.map((item, index) => (
          <RouteList key={index}>
            <Link href={item.path} passHref>
              <a>{item.route}</a>
            </Link>
          </RouteList>
        ))}
      </RouteUList>
    </NavContainer>
  );
};

export default SideDrawer;
