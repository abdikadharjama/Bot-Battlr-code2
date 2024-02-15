import React from 'react';
import { Box, Heading, Image, Button, Flex } from '@chakra-ui/react';

function YourBotArmy({ army, releaseBot, dischargeBot }) {
  const handleReleaseBot = (botId) => {
    releaseBot(botId);
  };

  const handleDischargeBot = (botId) => {
    dischargeBot(botId);
  };

  return (
    <Box p="4" borderWidth="1px" borderRadius="lg">
      <Heading as="h2" size="md" mb="4">Your Bot Army</Heading>
      <Flex flexWrap="wrap">
        {army.map((bot) => (
          <Box key={bot.id} borderWidth="1px" borderRadius="md" overflow="hidden" flex="0 0 200px" m="2">
            <Image src={bot.avatar_url} alt={bot.name} borderRadius="md" boxSize="200px" />
            <Box p="2">
              <Heading as="h3" size="sm" mt="2">{bot.name}</Heading>
              <Flex mt="2" justifyContent="space-between">
                <Button onClick={() => handleReleaseBot(bot.id)} colorScheme="orange" size="sm">Release</Button>
                <Button onClick={() => handleDischargeBot(bot.id)} colorScheme="red" size="sm">Discharge</Button>
              </Flex>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

export default YourBotArmy;
