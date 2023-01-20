

import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

// import AppStoreBadge from '@/components/AppStoreBadge';
// import PlayStoreBadge from '@/components/PlayStoreBadge';

const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'bold'} fontSize={'12px'} color={"black"}>
        {children}
      </Text>
    );
  };
  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  

function Footer(){
    return (
        <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.600', 'gray')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>ONLINE SHOPPING</ListHeader>
            <Link href={'#'}>Men</Link>
            <Link href={'#'}>Women</Link>
            <Link href={'#'}>Kids</Link>
            <Link href={'#'}>Home & Living</Link>
            <Link href={'#'}>Beauty</Link>
            <Link href={'#'}>Gift Cards</Link>
            <Link href={'#'}>Myntra Insider</Link>
            
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>CUSTOMER POLICIES</ListHeader>
            <Link href={'#'}>Contact Us</Link>
            <Link href={'#'}>FAQ</Link>
            <Link href={'#'}>T&C</Link>
            <Link href={'#'}>Terms of Use</Link>
            <Link href={'#'}>Track Orders</Link>
            <Link href={'#'}>Cancalation</Link>
            <Link href={'#'}>Return</Link>
           
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>USEFUL LINKS</ListHeader>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Site Map</Link>
            <Link href={'#'}>Corporate Information</Link>
            <Link href={'#'}>Whitehat</Link>
            <Link href={'#'}>Privicy Policy</Link>
            <Link href={'#'}>Grievance Officer</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>EXPERIENCE MYNTRA APP ON MOBILE</ListHeader>
            {/* <AppStoreBadge />
            <PlayStoreBadge /> */}
             <ListHeader>KEEP IN TOUCH</ListHeader>
             <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2023 www.myntra.com. All rights reserved.</Text>
          
        </Container>
      </Box>
    </Box>
    )
}

export default Footer;