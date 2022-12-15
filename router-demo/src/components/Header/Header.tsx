import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <Link to="/">Home</Link> | &nbsp;
      <Link to="/Foo">Foo</Link> | &nbsp;
      <Link to="/Bar">Bar</Link>
    </nav>
  )
}

export default Header