export default Header;
import'./Header.css'

function Header(){
    return(
        <header>
            <div className="logo">1022 A</div>
            <nav>
             <ul>
                <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Informações</a>  
                    </li>
                    <li>
                      <a href="#">Listagen</a>  
                    </li>
                </ul>
            </nav>
        </header>
    )
    }