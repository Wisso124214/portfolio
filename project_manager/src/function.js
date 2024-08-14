import ContainerProfileForm from "./subsystems/components/containerProfileForm/ContainerProfileForm";


export const getServerData = async () => {
  //const response = await fetch('https://dummyjson.com/products/1');
  //const data = await response.json();
 
  document.getElementById('app').appendChild(<ContainerProfileForm /> )

  return true;
};