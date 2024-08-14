import { useEffect, useRef } from "react";
import imglogin from "@/assets/bg/login.jpg"
import ProfileForm from "@comp/profileForm/ProfileForm"
import './ContainerProfileForm.css'

const ContainerProfileForm = ({ formData, hideFngrprntImg, hideBackButton }) => {
  
  hideFngrprntImg === undefined ? hideFngrprntImg = false : hideFngrprntImg = true;
  hideBackButton === undefined ? hideBackButton = false : hideBackButton = true;

  let eImg = useRef(null);

  /*useEffect(()=>{
    
    eImg.current.style.width = globalThis.screen.width+'px';
  },[eImg])*/

  useEffect(() => {
    if(eImg.current){
      eImg.current.style.width = globalThis.screen.width+'px';
    }
  }, [eImg.current]);
  
  return (
    <>
      <div className='divall'>
        <div className="divimg">
          <img ref={eImg} src={imglogin} className="bg-img"/>
        </div>
        <div className="divform">
          <ProfileForm formData={ formData } hideFngrprntImg={hideFngrprntImg} hideBackButton={hideBackButton} autocenter autoAdjustInput/>
        </div>
      </div>    
    </>
  )
}

export default ContainerProfileForm;