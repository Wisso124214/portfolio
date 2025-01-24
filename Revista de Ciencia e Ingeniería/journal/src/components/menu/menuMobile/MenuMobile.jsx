import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const MenuMobile = ({ props }) => {

  const { categories, setCategorySelected, setTitleCategorySelected, tags, setFilterBy, setTagSelected } = props;

  return (
    <div className='categories-mobile'>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="outline" className="h-9 w-10 p-0" >
            <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4C2.22386 4 2 4.22386 2 4.5C2 4.77614 2.22386 5 2.5 5H12.5C12.7761 5 13 4.77614 13 4.5C13 4.22386 12.7761 4 12.5 4H2.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="text-center" key="type-prop" >
          <DropdownMenuLabel className="capitalize pl-5 text-left" >Categorías</DropdownMenuLabel>
          { Object.keys(categories).map((option, index) => 
            <DropdownMenuSub key={option+index}>
              <DropdownMenuSubTrigger key={option+index} className="capitalize pl-8" > {option} &emsp; </DropdownMenuSubTrigger> 
              <DropdownMenuSubContent key={option+index}>
                { categories[option] && categories[option].map((suboption, index) => 
                  <DropdownMenuItem key={suboption+index} className="capitalize px-12 flex flex-col self-center" onClick={()=>{setCategorySelected(suboption); setTitleCategorySelected(option)}} >{suboption}</DropdownMenuItem> 
                ) }
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          )}

          <DropdownMenuSeparator />
          <DropdownMenuLabel className="capitalize pl-5 text-left" >Etiquetas</DropdownMenuLabel>
            { tags.map((option, index) => 
              <DropdownMenuItem key={option+index} className="capitalize pl-8" onClick={()=>{ setTagSelected(option); setFilterBy('tagSelected') }} >{option} &emsp; &nbsp; </DropdownMenuItem> 
            )} 
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default MenuMobile;