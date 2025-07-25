import { Anchor, FixedHeightContainer, Text } from '@components';

export const Footer = () => {
  return (
    <FixedHeightContainer className="items-center">
      <footer>
        <Text>
          Page built using <Anchor href="https://contentful.com" label="Contentful" /> and{' '}
          <Anchor href="https://nextjs.org" label="Next.js" /> &middot;{' '}
          <Anchor href="https://github.com/msieroslawska/" label="Source" />
        </Text>
      </footer>
    </FixedHeightContainer>
  );
};
