import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ButtonUser({ userColor }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <svg className='user hover:opacity-75' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="9" r="3" stroke={userColor} strokeWidth="1.5"></circle> <path d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke={userColor} strokeWidth="1.5" strokeLinecap="round"></path> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke={userColor} strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Perfil
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Compras
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Ajustes
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Atajos de teclado
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Mis subscripciones</DropdownMenuItem>
          <DropdownMenuItem>
             Subscripciones similares
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invitar amigo</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Correo</DropdownMenuItem>
                <DropdownMenuItem>Mensaje</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Otro...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Equipo de Soporte</DropdownMenuItem>
        <DropdownMenuItem>FAQ</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Políticas de privacidad</DropdownMenuItem>
        <DropdownMenuItem>Términos y condiciones</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <svg className="h-6" viewBox="0 0 24 24" id="_24x24_On_Light_Session-Leave" data-name="24x24/On Light/Session-Leave" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect id="view-box" width="24" height="24" fill="none"></rect> <path id="Shape" d="M2.95,17.5A2.853,2.853,0,0,1,0,14.75v-12A2.854,2.854,0,0,1,2.95,0h8.8a.75.75,0,0,1,0,1.5H2.95A1.362,1.362,0,0,0,1.5,2.75v12A1.363,1.363,0,0,0,2.95,16h8.8a.75.75,0,0,1,0,1.5Zm9.269-4.219a.751.751,0,0,1,0-1.061L14.939,9.5H5.75a.75.75,0,0,1,0-1.5h9.19L12.219,5.28A.75.75,0,1,1,13.28,4.22l4,4a.749.749,0,0,1,0,1.06l-4,4a.751.751,0,0,1-1.061,0Z" transform="translate(3.25 3.25)" fill="#141124"></path> </g></svg>
          &nbsp; Cerrar sesión
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
