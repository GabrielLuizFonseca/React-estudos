import Item from './Item'
function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano={1995}/>
                <Item marca="Fiat" ano={1940}/>
                <Item />
            </ul>
        </>
    )
}
export default List