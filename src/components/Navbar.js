import {
    Link,
    useLocation
  } from 'react-router-dom'

function Navbar() {
    let location = useLocation();
    location = location.pathname;
    console.log(location);
    return (
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Users</Link>
            </li>
            <li>
              <Link to="/secret">Rahasia Negara</Link>
            </li>
          </ul>
        </nav>
    )
}

export default Navbar
