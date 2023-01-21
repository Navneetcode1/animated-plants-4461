

import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Image,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Spacer,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';

const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'750'} fontFamily={"sans-serif"} fontSize={'13px'} color={"black"}>
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
      color={useColorModeValue('gray.600', 'gray')}
      mt={"100px"}>
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
            <Link href={'#'}>Fashion-Mantra Insider</Link>
            
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
            <ListHeader>GET FASHION-MANTRA APP ON MOBILE</ListHeader>
            <Spacer/>
            <Image width={"70%"} src="https://seeklogo.com/images/A/app-store-google-play-logo-4A2747BF5E-seeklogo.com.png"/>
            <Spacer/>
             <ListHeader >KEEP IN TOUCH</ListHeader>
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
            <SocialButton label={'Instagram'} href={'#'}>
              <FaFacebook />
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
          justify={"end"}
          align={"end"}>
          <Text>© 2023 www.fashionmantra.com. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
    )
}

export default Footer;