import PropTypes from 'prop-types'


export const Header = ({title}) => {
  return (
    <header>
        <h1>{title}</h1>
    </header>
  )
}

Header.protoTypes = {
  title: PropTypes.string,
}

export default Header
