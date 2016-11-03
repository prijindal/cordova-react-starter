import {grey900} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: grey900,
  },
  appBar: {
    height: 56,
  },
})

export default muiTheme;
