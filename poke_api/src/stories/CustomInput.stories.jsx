import CustomInput from "./CustomInput";

export default {
  component: CustomInput,
}

export const search = {
  args: {
    placehoder: 'Search',
    value: 'typing...',
    onChange: ()=>{ console.log('typing...') }
  }
}