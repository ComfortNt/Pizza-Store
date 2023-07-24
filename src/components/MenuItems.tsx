

const MenuItems = (props:any) => {
  return (

    <div className="menuItems">

        <div style={{ backgroundImage: `url(${props.image})`}}></div>
        <h1>{props.name}</h1>
        <p>{props.price}</p>
      
    </div>
  )
}

export default MenuItems
