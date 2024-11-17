import { FC } from "react";

interface IPropsMiPrimerComponent{
    text:string;
    color:string;
    fontSize?:number;
}

export const MiPrimerComponent:FC<IPropsMiPrimerComponent> = ({
    text,
    color,
    fontSize,
}) => {
  return (
    <div style={{ color:`${color}`,fontSize:`${fontSize||3}rem` }}>
        <p>
        {text}
        </p>
        </div>
  )
}
