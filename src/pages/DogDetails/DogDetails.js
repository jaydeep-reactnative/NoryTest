import { Heading, Box, Image } from '@chakra-ui/react';

export default function DogDetails() {
  return (
    <Box>
      <Heading as="h1" fontSize="32px" color="rgba(47, 62, 77, 1)" mb="24px">
        Sales
      </Heading>
      <Box d="flex" flexWrap="wrap">
        <Image
          w={{ base: '100%', md: '544px' }}
          h={{ base: '187px', md: '334px' }}
          mr={{ base: '0', md: '15px' }}
          mb={{ base: '15px', md: '15px' }}
          objectFit="cover"
          src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg"
          alt="Segun Adebayo"
        />
      </Box>
    </Box>
  );
}
