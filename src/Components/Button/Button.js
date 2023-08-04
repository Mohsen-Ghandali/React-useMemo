import { memo } from "react";

const Button = ({handleClick,children}) => {
console.log("render" + children);
    return ( 
<>
<button onClick={handleClick}>{children}</button>
</>
     );
}
 
export default memo(Button);