import logo from '@/assets/logo.png';
import { Link } from 'react-router-dom';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const Logo = ({ }) => {

  return (
    <TooltipProvider >
        <Tooltip >
          <TooltipTrigger className='logo'>
            <Link className='logo' to="/"   >
              <h1 >RCI</h1>
              <img src={logo} alt='logo' />
            </Link>            
          </TooltipTrigger>
          <TooltipContent>
            <p>Revista de Ciencia e Ingeniería</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
  );
}

export default Logo;