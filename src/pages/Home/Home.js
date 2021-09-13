import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDogs } from '../../state/dog/actions';
import { DOG_STATUS } from '../../state/dog/reducer';
import { Heading, Box, Image } from '@chakra-ui/react';

export default function Home() {
  const dogs = useSelector(state => state.dogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDogs());
  }, []);

  if (dogs.status === DOG_STATUS.LOADING) return <div>Loading...</div>;
  if (dogs.status === DOG_STATUS.ERROR) return <div>An error occured!</div>;

  return (
    <Box>
      <Heading as="h1" fontSize="32px" color="rgba(47, 62, 77, 1)" mb="24px">
        Labour
      </Heading>
      <Box d="flex" flexWrap="wrap">
        {dogs.data?.map(key => (
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
