import { menuList } from "../MenuList"
import MenuItems from "../components/MenuItems"

const Menu = () => {
  return (
    <div className="menu">


        <h1 className="menuTitle"> We Offer:</h1>

        <div className="menuItems">

            <div className="menuList">

                { menuList.map( (menuItems , key) => { 

                return( <MenuItems key={key} image={menuItems.image} name={menuItems.name} price ={menuItems.price}  />
            
                )})} 

            </div>
        </div>
      
    </div>
  )
}

export default Menu
 