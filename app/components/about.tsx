import { Text } from '@mantine/core';

import { PageContainer } from '@components/pageContainer';

export const About = () => {
  return (
    <PageContainer isLoading={false} title="Hi!">
      <Text size="l" fw={900}>
        I am Marta, a software engineer.
      </Text>

      <Text mt="md">
        I am a silly geek born and raised in Poland, currently enjoing life in Berlin. I am stereotypical to the bone: I
        like books, video games and quiet evenings at home, but I won&apos;t say no to a hike or a lazy Sunday brunch.
        You can motivate me a lot with good food. Lots of good food and coffee.
      </Text>
      <Text mt="md">
        I have been all over the place, to finally settle as a fullstack developer. With experience in QA and frontend
        work, I value clean, well tested code and user friendly designs. Nowawadys I am{' '}
        <Text span td="line-through" variant="gradient" gradient={{ from: 'lime', to: 'red', deg: 135 }}>
          teaching toasters to think
        </Text>{' '}
        integrating AI systems, having fun with AWS and not thinking too hard about Skynet. I don&apos;t vibe code.{' '}
        <Text span variant="gradient" gradient={{ from: 'lime', to: 'red', deg: 135 }}>
          Yet.
        </Text>{' '}
      </Text>

      <Text mt="md">
        This page is currently at its 4th or 5th iteration. Initially it was a playground to showcase my frontend
        projects and a journal of sorts documenting my struggles with learning JavaScript. The things I wrote back then
        are mostly outdated, but I want to keep them around as a reminder of how far I have come and how hard this
        journey has been. Also for shits and giggles, of course. Who&apos;s not looking at their own code and not
        cringe?
      </Text>
    </PageContainer>
  );
};
