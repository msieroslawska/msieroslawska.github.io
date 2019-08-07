import Typography from 'typography';
import doelgerTheme from 'typography-theme-doelger';

doelgerTheme.overrideThemeStyles = () => ({
  a: {
    'background-image': 'none',
    'text-decoration': 'underline',
    textShadow: 'none',
  },
  'a:hover': {
    'text-decoration': 'none',
  },
  'a, body': {
    color: '#111',
  }
});

const typography = new Typography(doelgerTheme);
export const { scale, rhythm, options } = typography;
export default typography;
