import React from 'react';
import { Image, Progress, VStack, Text, HStack } from '@chakra-ui/react';

function PreLoader() {
  return (
    <VStack
      w='100%'
      h='100vh'
      spacing='4'
      justifyContent='center'
      alignItems='center'
    >
      <Image src='/logo.png' width='150px' />
      <Progress size='xs' w='40%' colorScheme='brown' isIndeterminate />
      <HStack>
        <Text fontWeight='300' color='gray.400'>
          The best finds, All in one place
        </Text>
      </HStack>
    </VStack>
  );
}

export default PreLoader;
