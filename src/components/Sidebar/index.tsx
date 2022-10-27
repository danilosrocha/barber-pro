import { ReactNode } from 'react';
import {
  Box,
  CloseButton,
  Flex,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
} from '@chakra-ui/react';

import { Container, ViewSidebar, ViewSidebarLogo, ViewNavItem, Text, Title, Icon, Link } from './styles';
import { FiScissors, FiClipboard, FiSettings, FiMenu, FiLogOut } from 'react-icons/fi';
import { IconType } from 'react-icons';

interface LinkItemProps {
  name: string;
  icon: IconType;
  route: string;
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Agenda', icon: FiScissors, route: '/dashboard' },
  { name: 'Cortes', icon: FiClipboard, route: '/haircuts' },
  { name: 'Minha Conta', icon: FiSettings, route: '/profile' },
  { name: 'Logout', icon: FiLogOut, route: '/login' },
];

export function Sidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />

      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement='left'
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
        onClose={onClose}
      >
        <DrawerContent>
          <SidebarContent onClose={() => onClose} />
        </DrawerContent>
      </Drawer>

      <Box ml={{ base: 0, md: 60 }}>{children}</Box>
    </Container>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <ViewSidebar>
      <ViewSidebarLogo>
        <Link href="/dashboard">
          <Flex cursor="pointer" userSelect="none" flexDirection="row">
            <Title>
              Barber
            </Title>
            <Title>
              PRO
            </Title>
          </Flex>
        </Link>
        {/* <CloseButton
          borderRadius="5"
          cursor="pointer"
          display={{ base: 'flex', md: 'none' }}
          onClick={onClose}
        /> */}
      </ViewSidebarLogo>

      {LinkItems.map((link) => (
        <NavItem icon={link.icon} route={link.route} key={link.name}>
          <Text>
            {link.name}

          </Text>
        </NavItem>
      ))}
    </ViewSidebar>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactNode;
  route: string;
}

const NavItem = ({ icon, children, route, ...rest }: NavItemProps) => {
  return (
    <Link href={route}>
      <ViewNavItem>
        {icon && (
          <Icon as={icon} />
        )}
        {children}
      </ViewNavItem>
    </Link>
  );
};
