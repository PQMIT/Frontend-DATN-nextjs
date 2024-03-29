import { makeStyles } from '@material-ui/core/styles';
import image from '../../constants/image';

export default makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${image.BACKGROUND_IMAGE})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? /* theme.palette.grey[50] */ '#e1ceaf'
        : theme.palette.grey[900],

    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  divider: {
    border: '1px solid #ccc',
    height: '1px',
    flexGrow: 1,
    margin: theme.spacing(1),
  },
}));
