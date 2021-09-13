import { Box, Image, VStack, Link } from '@chakra-ui/react';
import { Link as RLink } from 'react-router-dom';
import CalenderIcon from '../../assets/icons/CalenderIcon';
import HomeIcon from '../../assets/icons/HomeIcon';
import SettingIcon from '../../assets/icons/SettingIcon';
import Logo from './Logo3x.png';
import './Navbar.css';

export default function Navbar() {
  return (
    <Box
      w={{ base: '100%', md: '64px' }}
      h={{ base: 'auto', md: '100vh' }}
      bg="#d4e2ed"
      d="flex"
      flexDirection={{ base: 'row', md: 'column' }}
    >
      <Box
        w={{ base: 'auto', md: '100%' }}
        d="flex"
        justifyContent="center"
        py="18px"
        px={{ base: '15px', md: '0' }}
      >
        <Image d="block" boxSize="30px" src={Logo} alt="logo" />
      </Box>
      <Box
        d="flex"
        flexDirection={{ base: 'row', md: 'column' }}
        flex="1"
        pb={{ base: '0', md: '30px' }}
        justifyContent={{ base: 'flex-end', md: 'flex-start' }}
      >
        <VStack
          flex={{ base: '0', md: '1' }}
          align="stretch"
          d="flex"
          flexDirection={{ base: 'row', md: 'column' }}
        >
          <Link
            as={RLink}
            to="/dog-details"
            className="nav-icons"
            py="23px"
            px="25px"
            textAlign="center"
          >
            <CalenderIcon />
          </Link>
          <Link
            as={RLink}
            to="/"
            className="nav-icons"
            py="23px"
            px="25px"
            textAlign="center"
            m="0"
          >
            <HomeIcon />
          </Link>
        </VStack>
        <Link
          as={RLink}
          to="/settings"
          className="nav-icons"
          py="23px"
          px="25px"
          textAlign="center"
        >
          <SettingIcon />
        </Link>
      </Box>
    </Box>
  );
}
