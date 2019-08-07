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
  },
  img: {
    'background-color': '#FFF',
    border: '1px solid black',
    padding: '5px',
  },
});

const typography = new Typography(doelgerTheme);
export const { scale, rhythm, options } = typography;
export default typography;
