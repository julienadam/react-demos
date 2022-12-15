import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <Link to="/">Home</Link> | &nbsp;
      <Link to="/foo">Foo</Link> | &nbsp;
      <Link to="/bar">Bar</Link> | &nbsp;
      <Link to="/bar/blah">Bar named</Link>
    </nav>
  )
}

export default Header