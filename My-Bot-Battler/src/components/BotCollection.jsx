import React from 'react';
import { Box, Heading, Image, Button } from '@chakra-ui/react';

function BotCollection({ bots, enlistBot }) {
  const handleEnlistBot = (bot) => {
    enlistBot(bot);
  };

  return (
    <Box p="4" borderWidth="1px" borderRadius="lg">
      <Heading as="h2" size="md" mb="4">Bot Collection</Heading>
      <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap="4">
        {bots.map((bot) => (
          <Box key={bot.id} borderWidth="1px" borderRadius="md" overflow="hidden">
            <Image src={bot.avatar_url} alt={bot.name} borderRadius="md" boxSize="200px" />
            <Box p="2">
              <Heading as="h3" size="sm" mt="2">{bot.name}</Heading>
              <Button onClick={() => handleEnlistBot(bot)} colorScheme="teal" mt="2" size="sm">Enlist</Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default BotCollection;
