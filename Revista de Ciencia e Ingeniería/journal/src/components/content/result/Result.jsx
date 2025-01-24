import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import ResultDetails from '../resultDetails/ResultDetails';

const Result = ({ props }) => {  

  const { item, index, categories, searchText, setFilterBy, setTitleCategorySelected, setCategorySelected, setTagSelected, filterBy } = props;

  const propsResultDetails = { item, categories, setFilterBy, setTitleCategorySelected, setCategorySelected, setTagSelected }

  return(
    <div key={index} className="content-item" >
      <TooltipProvider >
        <Tooltip>
          <TooltipTrigger className='text-left hover:underline' >
            <div style={{'width': '85vw', 'lineHeight': '2.25rem', }} >
              {searchText && filterBy === 'searchText' ? 
                  <div className='font-semi items-center' style={{'fontSize': '24px', 'display': 'flex', 'flexDirection': 'row', }}>
                    {item.title.split(' ').map((w, i)=>
                      w.toLowerCase().includes(searchText.toLowerCase()) && searchText.length > 1 ? <div key={i} className='font-extrabold'>{w}&nbsp;</div> : <h2 key={i} >{w}&nbsp;</h2>
                    )}
                  </div>

              : <h2>{item.title}</h2>}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{item.url}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      
      <ResultDetails props={propsResultDetails} />
    </div>
  )
}

export default Result;