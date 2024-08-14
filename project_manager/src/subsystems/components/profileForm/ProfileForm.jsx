import { useForm } from "react-hook-form"
import { useEffect, useReducer, useRef, useState } from "react"
import Autocenter from "@comp/autocenter/Autocenter";
import './ProfileForm.css'
import fingerprint from '@/assets/icons/fingerprint2.svg'
import { Link } from "react-router-dom";
import InputForm from "@comp/inputForm/InputForm";

export default function ProfileForm({ autocenter, autoAdjustInput, formData, hideFngrprntImg, hideBackButton  }){

  autoAdjustInput === undefined ? autoAdjustInput = false : autoAdjustInput = true;
  autocenter === undefined ? autocenter = false : autocenter = true;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
  const onSubmit = (data) => console.log(data)
  let divform = useRef(null);

  /**dropdown */

  const [showDropdown, setShowDropdown] = useState(false)
  let divFieldDD = useRef(null)
  const [optionSelected, setOptionSelected] = useState('')

  useEffect(()=>{
    if(document.getElementsByClassName('selectdropdown')[0]){
      document.getElementsByClassName('selectdropdown')[0].style.width = document.getElementsByClassName('fielddropdown')[0].offsetWidth+'px' 
    }

  },[divFieldDD.current])

  return(
    <form className="form " ref={divform} autoComplete="off" /*onSubmit={ ()=>{handleSubmit(onSubmit); sumbitButton(onSubmit) }  }*/>
      {hideBackButton ? '' :
      <button className={hideFngrprntImg ? "buttonback fngrprnt-hidden" : "buttonback " } >
        <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z" fill="white" fillRule="evenodd" clipRule="evenodd"></path></svg>
      </button>
      }
      
      {hideFngrprntImg ? '' :
        <div className="fingerprint">
          <img src={fingerprint} />
        </div>
      }
      {autocenter ? <Autocenter setLeft element={divform} /> : ''}
      
      {
        formData.inputs.props.map((input, index)=>(
          autoAdjustInput ? 
            <InputForm adjustContent inputData={input} allData={formData.inputs.propsAll} events={formData.inputs.events} key={index} /> :
            <InputForm inputData={input} allData={formData.inputs.propsAll} events={formData.inputs.events} key={index} />          
        ))
      }

      <div 
        className='dropdownform' 
        onClick={
          ()=>{
            let dropdown = document.getElementsByClassName('selectdropdown')[0]
            
            setShowDropdown(!showDropdown)
            divFieldDD.current.classList.toggle('open')
            
            if(dropdown && showDropdown){
              dropdown.style.width = document.getElementsByClassName('fielddropdown')[0].offsetWidth+'px'
              dropdown.style.display = 'none'
            }else{
              dropdown.style.display = 'block'
            }
          }
        }
      >
        <div className='fielddropdown' ref={divFieldDD} >
        <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
          <div className="labeldropdown"> {optionSelected==='' ? 'DD' : optionSelected } </div>
        </div>
        <div className="selectdropdown" {...register("selectdropdown")}>
          <div className="optiondropdown" onClick={(e)=>setOptionSelected(e.target.innerText)} value="0">01</div>
          <div className="optiondropdown" onClick={(e)=>setOptionSelected(e.target.innerText)} value="1">02</div>
          <div className="optiondropdown" onClick={(e)=>setOptionSelected(e.target.innerText)} value="2">03</div>
          <div className="optiondropdown" onClick={(e)=>setOptionSelected(e.target.innerText)} value="3">04</div>
        </div> 
      </div>

      <div>
        <select>
          <option value="0">Select a role</option>
          <option value="1">Manager</option>
          <option value="2">Developer</option>
          <option value="3">Designer</option>
        </select>
      </div>


      <button className="button" id='button_continue' onClick={()=>alert(onSubmit)} >Continue</button>

      <div className="labelform">
        <label>Already you have account?</label> <Link className="linklabel" to="/login" >Log in.</Link> 
      </div>
    </form>
  )
}