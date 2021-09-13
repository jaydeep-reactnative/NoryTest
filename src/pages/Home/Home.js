import { Heading, Box, Image } from '@chakra-ui/react';

export default function Home() {
  const data = [1,2,3,4,5,6,7,8,9,10]
  return (
    <Box>
      <Heading as="h1" fontSize="32px" color="rgba(47, 62, 77, 1)" mb="24px">
        Labour
      </Heading>
      <Box d="flex" flexWrap="wrap">
      {data.map(key => (
          <Image
            key={key}
            w={{ base: '100%', md: '544px' }}
            h={{ base: '187px', md: '334px' }}
            mr={{ base: '0', md: '15px' }}
            mb={{ base: '15px', md: '15px' }}
            objectFit="cover"
            src={key}
            alt="Segun Adebayo"
          />
        ))}
      </Box>
    </Box>
  );
}
