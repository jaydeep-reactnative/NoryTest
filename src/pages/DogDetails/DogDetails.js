import { Heading, Box, Image } from '@chakra-ui/react';

export default function DogDetails() {
  return (
    <Box>
      <Heading as="h1" fontSize="32px" color="rgba(47, 62, 77, 1)" mb="24px">
        Sales
      </Heading>
      <Box d="flex" flexWrap="wrap">
        <Image
          objectFit="cover"
          src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg"
          alt="Segun Adebayo"
        />
      </Box>
    </Box>
  );
}
