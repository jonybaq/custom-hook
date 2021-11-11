import { useState } from "react";


export const useForms = (initialState={}) => {
   const [values, setvalues] = useState(initialState);
   const handleInputChange = ({ target }) => {
      //console.log(target);
      setvalues({
          ...values,
          [target.name]: target.value
      });
  };
  const reset=()=>{
      setvalues(initialState)
  }

  return [values,handleInputChange,reset];
   
}
