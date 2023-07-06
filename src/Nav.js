import CarWindget from "./CartWindget";





function Nav (){
    return(
    <>
<nav  className="flex justify-between p-6 bg-blue-400 ">
    
        <h1>Bienvenidos</h1>
        <ul >
        <a href="#">link</a>
      <a href="#">link</a>
      <a href="#">link</a>
      </ul>
      <CarWindget/>
      </nav>
    
    </>
)

}

export default Nav;