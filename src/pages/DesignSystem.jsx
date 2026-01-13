import { Link } from 'react-router-dom';
import Typography from '../ui-components/Typography/Typography.jsx';
import Button from '../ui-components/Button/Button.jsx';
import "./DesignSystem.scss"

function DesignSystem() {
  return (
    <div>
      <Typography type="text-preset-1">
        Lorem ipsum dolor sit amet.
      </Typography>
      <Typography type="text-preset-2-bold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.
      </Typography>
      <Typography type="text-preset-2-regular">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.
      </Typography>
      <Typography type="text-preset-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum.
      </Typography>

      <div className="gradient"></div>

      <Button variant="black">
        <Typography type="text-preset-2-bold" color="white">Subscribe to monthly newsletter</Typography>
      </Button>
      <Button variant="red">
        <Typography type="text-preset-2-bold" color="white">Subscribe to monthly newsletter</Typography>
      </Button>
    </div>
  );
}

export default DesignSystem;