import { all } from "eslint-plugin-promise/rules/lib/promise-statics";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

const InputForm = ({ adjustContent, inputData, allData, events })=>{

  adjustContent === undefined ? adjustContent = false : adjustContent = true

  let divInput = useRef(null);
  let input = useRef(null);
  const quantMinChar = 0;
  const quantMaxChar = 22;
  const widthPerLetter = 9;
  const [propsInput, setPropsInput] = useState('')

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  useEffect(()=>{
    updateWidthInput()
  },[divInput.current, input.current])

  useEffect(()=>{
    getPropsInput();
    setEventsInput();
  },[inputData, allData])

  const getPropsInput = ()=>{
    let str = ''
    str+=setPropsObj(inputData)
    str+=setPropsObj(allData)

    const propsObj = strToPropsObj(str)
    setPropsInput(propsObj)
  }

  const strToPropsObj = (str) => {
    const props = {}
    const regex = /(\w+)=["{](.*?)["}]/g
    let match
    while ((match = regex.exec(str)) !== null) {
      props[match[1]] = match[2]
    }
    return props
  }

  const setEventsInput = ()=>{
    if(events!==undefined){
      Object.keys(events).map((key)=>{
        input.current.addEventListener(key, eval(events[key]))
      })
    }
  }
  
  const setPropsObj = (obj)=>{
    let str = ''

    Object.keys(obj).map((key)=>{
      key==='none' ? str+=obj[key]+' ' :
      str+=key+'='+(obj[key][0]==='{' ? obj[key] : '"'+obj[key]+'"')+' '
    })
    return str;
  }

  const updateWidthInput = ()=>{
    if (input.current.value.length===0 && adjustContent){
      input.current.style.width = input.current.placeholder.length*widthPerLetter+'px';
      input.current.style.caretColor = 'transparent';
      divInput.current.style.width = input.current.placeholder.length*widthPerLetter+'px';
    }
    else if(input.current.value.length>quantMinChar && input.current.value.length<=quantMaxChar && adjustContent){
      input.current.style.width = input.current.value.length*widthPerLetter+'px';
      input.current.style.caretColor = 'currentColor';
      divInput.current.style.width = input.current.value.length*widthPerLetter+'px';
    }
  }

  //establecer propiedades del input como string

  

  return(    
    <div className="inputform-container" ref={divInput}>
      <input 
        ref={input}
        {...propsInput} 
      />
      {/* register your input into the hook by invoking the "register" function */}
      {/* include validation with required or other standard HTML validation rules */}
      {/* errors will return when field validation fails  */}
      {/*errors.exampleRequired && <span>This field is required</span>*/}
    </div>
  )
}

export default InputForm;