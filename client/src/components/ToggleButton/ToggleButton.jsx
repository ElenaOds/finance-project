import { useState } from 'react'
import { Label, Input, Button } from './ToggleButton.slyled';

const ToggleButton = () => {
    const [toggle, setToggle] = useState(true);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
      <Label>
        <Input type="checkbox"/>
        <Button onClick={handleToggle}/>
      </Label>
    )
  }

  export default ToggleButton;