

const ResultDetails = ({ props }) => {

  const { item, categories, setFilterBy, setTitleCategorySelected, setCategorySelected, setTagSelected } = props;

  return (
    <div className="flex flex-col">
      <div className="flex flex-row m-3 ml-4 mb-4">
        {item.date ? <p className="cont-item-date" style={{ color: '#fff', backgroundColor: '#444' }} >{item.date}</p> : null}
        
        { Object.keys(categories).map((prop, index) => {
          return item[prop] ? 
            <p  
              className="cont-item-categories cursor-pointer" 
              key={prop} 
              onClick={(e)=>{
                setCategorySelected(item[prop]);
                setTitleCategorySelected(prop);
                setFilterBy('categorySelected');
              }} > 

                {item[prop]}
              </p> 
            : null
        }
        )}
        { item.tags ? item.tags.map((prop, index) => {
            return(
              <p 
                key={prop} 
                className="cont-item-tags capitalize cursor-pointer"
                onClick={(e)=>{
                  setTagSelected(prop);
                  setFilterBy('tagSelected');
                }}
                >
                  {prop}
                </p>
            )
          }) 
          : null
        }
      </div>
      <p className="text-lg mt-1" >&emsp;{item.description}</p>
      <div className="separator"></div>
    </div>
  )
}

export default ResultDetails;