import PropTypes from'prop-types'
function Item({marca, ano}){
    return(
        <>
            <li>
            {marca} - {ano}
            </li>
        </>
    )
}
Item.propTypes ={
    marca: PropTypes.string.isRequired,
    ano: PropTypes.number.isRequired
}

Item.defaultProps ={
    marca: "Faltou a marca",
    ano: 0
}

export default Item