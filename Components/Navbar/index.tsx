import { Box, Flex, HStack, IconButton, Image, Text, VStack} from '@chakra-ui/react'
import { PhoneIcon, EmailIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import { Link } from 'react-scroll'


const Navbar = () => {
    const [showMobileNav, setShowMobileNav] = useState<boolean>(false)
  return (
    <>
    <Flex w="100%" display={["flex", "flex", "flex", "none"]}  flexDirection="column"  >
    <Flex height="90px" bgColor="white" pl={4} pr={4} alignItems="center"  justifyContent="space-between" borderBottom="2px" borderBottomColor="#072331">
           <Link to="home" spy={true} smooth={true} offset={-50} duration={500}>
           <Flex  alignItems="center">
            <Image height={["50px", "75px"]} src='/images/muzulu_logo.PNG' alt="electricty-logo" />  
            <Flex flexDir="column">
            <Text fontWeight="bold" fontSize={["md", "xl"]}ml={3} color="#072331" textAlign="center">Muzi Zulu</Text>
            <Text fontWeight="bold" fontSize={["md", "xl"]}ml={3} color="#F29D1F" textAlign="center">Home Builders</Text>
            </Flex>
                
            </Flex>
           </Link>
            {
                showMobileNav ?  <IconButton 
                onClick={() => setShowMobileNav(false)}
               
                aria-label="close Menu"
                size="lg"
                icon={<CloseIcon/>}
                /> :
                <IconButton 
                onClick={() => setShowMobileNav(true)}
                
                 aria-label='Open-Menu'
                 size='lg'
                 icon={<HamburgerIcon  />}
                />
            }
    
    </Flex>
   {
    showMobileNav ?  <Flex   
    bgColor="white"
    zIndex={20}
    minH="50px"
    flexDir="column"    
    justifyContent="center"
    >
        
        <VStack spacing={8} mt={4}>
              <Link to="home" spy={true} smooth={true} offset={-50} duration={500}>
              <Text onClick={() => setShowMobileNav(false)} color="#072331" _hover={{color:"#F29D1F"}} cursor="pointer"  fontSize="sm">HOME</Text>
              </Link>
              <Link to="about" spy={true} smooth={true} offset={-50} duration={500}>
              <Text onClick={() => setShowMobileNav(false)} color="#072331" _hover={{color:"#F29D1F"}} cursor="pointer" fontSize="sm">ABOUT</Text>
              </Link>
              <Link to="services" spy={true} smooth={true} offset={50} duration={500}>
              <Text onClick={() => setShowMobileNav(false)}  color="#072331" _hover={{color:"#F29D1F"}} cursor="pointer" fontSize="sm">SERVICES</Text>
              </Link>
              <Link to="gallery" spy={true} smooth={true} offset={50} duration={500}>
              <Text onClick={() => setShowMobileNav(false)}  color="#072331" _hover={{color:"#F29D1F"}} cursor="pointer" fontSize="sm">GALLERY</Text>
              </Link>
              <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
              <Text onClick={() => setShowMobileNav(false)}  color="#072331" _hover={{color:"#F29D1F"}} cursor="pointer" fontSize="sm">CONTACT</Text>
              </Link>  
          </VStack>
          <Flex height="50px" mt={2} bgColor="#072331" alignItems="center" justifyContent="center">
            <VStack spacing={0}>
            <Flex>
        <Flex mt={1} mr={1}>
        <PhoneIcon color="white" />
        </Flex>
        <Text fontSize='sm' color="white">+27(0) 73 228 7500</Text>
        </Flex>
        <Flex>
        <Flex mt={1} mr={1}>
        <EmailIcon color="white"/>
        </Flex>
       
        <Text fontSize='sm' color="white">support@teselectical.co.za</Text>
        </Flex>
                
            </VStack>

             </Flex>


    </Flex> :
    null
   }
    </Flex>

    <Flex id="home"  w="100%" display={["none", "none", "none", "flex"]} flexDirection="column"  >
        <Flex justifyContent="space-between" height="30px" pl={10} pr={10} bgColor="#072331" alignItems="center">
        <Flex>
        <Flex mt={1} mr={1}>
        <PhoneIcon color="white" />
        </Flex>
        <Text fontSize='sm' color="white">+27(0) 74 216 4070</Text>
        </Flex>
        <Flex>
        <Flex mt={1} mr={1}>
        <EmailIcon color="white"/>
        </Flex>
       
        <Text fontSize='sm' color="white">support@muzizulu.co.za</Text>
        </Flex>
        </Flex>
        <Flex height="90px" bgColor="white" pl={20} pr={20}  justifyContent="space-between" borderBottom="2px" borderBottomColor="#072331">
           <Link to="home" spy={true} smooth={true} offset={-50} duration={500}>
           <Flex  alignItems="center" cursor="pointer">
                <Image height="75px" src='/images/muzulu_logo.PNG' alt="muzulu_logo" />
                <Flex flexDir="column">
                <Text fontWeight="bold" fontSize='2xl' ml={3} color="#072331" textAlign="center">Muzi Zulu</Text>
                <Text fontWeight="bold"  fontSize='2xl' ml={3} color="#F29D1F" textAlign="center">Home Builders</Text>
                    </Flex>  
               
            </Flex>
           </Link>

            <HStack>
          <Box display="flex" alignItems="center" _hover={{bgColor: "#F29D1F"}} bgColor="#072331" border="1px" borderColor="#F29D1F" pl={2} pr={2} h='30px'  cursor="pointer" >
              <Link to="home" spy={true} smooth={true} offset={-50} duration={500}>
              <Text color="white"  fontSize="sm">HOME</Text>
              </Link>
          </Box>
          <Box display="flex" alignItems="center" _hover={{bgColor: "#F29D1F"}} bgColor="#072331" border="1px" borderColor="#F29D1F" pl={2} pr={2} h='30px'  cursor="pointer" >
              <Link to="about" spy={true} smooth={true} offset={-50} duration={500}>
              <Text color="white"  fontSize="sm">ABOUT</Text>
              </Link>
          </Box>
          <Box display="flex" alignItems="center" _hover={{bgColor: "#F29D1F"}} bgColor="#072331" border="1px" borderColor="#F29D1F" pl={2} pr={2} h='30px'  cursor="pointer" >
              <Link to="services" spy={true} smooth={true} offset={50} duration={500}>
              <Text color="white"  fontSize="sm">SERVICES</Text>
              </Link>
          </Box>
          <Box display="flex" alignItems="center" _hover={{bgColor: "#F29D1F"}} bgColor="#072331" border="1px" borderColor="#F29D1F" pl={2} pr={2} h='30px'  cursor="pointer" >
              <Link to="gallery" spy={true} smooth={true} offset={50} duration={500}>
              <Text color="white"  fontSize="sm">Gallery</Text>
              </Link>
          </Box>
          <Box display="flex" alignItems="center" _hover={{bgColor: "#F29D1F"}} bgColor="#072331"  border="1px" borderColor="#F29D1F" pl={2} pr={2} h='30px'  cursor="pointer" >
              <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
              <Text color="white"  fontSize="sm">CONTACT</Text>
              </Link>
          </Box>
          
          </HStack>
            
        </Flex>
    </Flex>
    </>
  )
}

export default Navbar