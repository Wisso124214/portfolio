import  './TopScroll.css'

export default function TopScroll() {
  function topFunction() {
    
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }  
  
  return(
    <div onClick={topFunction} className="topScroll">
      <svg width="40" height="40" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z" fill="rgb(216, 0, 0)" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
    </div>
  )
}