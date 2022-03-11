import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import Switch from '@material-ui/core/Switch';

const PurpleSwitch = withStyles({
  switchBase: {
    color: orange[300],
    '&$checked': {
      color: orange[500],
    },
    '&$checked + $track': {
      backgroundColor: orange[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

export default function ToggleButtonAC(props) {
  const [isChecked, setCheck] = React.useState(false);
  const { onClick } = props;

  const handleChange = () => {
    setCheck(!isChecked);
    onClick();
  };

  return (
    <PurpleSwitch checked={isChecked} onChange={handleChange} name="toggleSwitch" />
  );
}
