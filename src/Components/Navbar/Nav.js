import'./Nav.css'

const nav=()=>{
    return(
        <div className="nav">
            <div className="nav-logo">Bike-Evo</div>
           <ul className='list'>
            <li>home</li>
            <li>Explore</li>
            <li>About</li>
            <li className='con'>Contact</li>
           </ul>
        </div>
    )
}
export default nav;