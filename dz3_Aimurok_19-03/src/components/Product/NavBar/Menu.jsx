
function Menu() {

    const formSubmit = (e) => {
        e.preventDefault()
    }
    const basketClick = (e) => {
        e.preventDefault()
        console.log("Ваша корзина сейчас пуста")
    }
    const putChange = (e) => {
        console.log(e.target.value)
    }
    const progress = (e) => {
        console.log('работает')
    }
    return (
        <div className="container">
            <form className="Menu" onSubmit={formSubmit}>
                <a href=""  onClick={basketClick}>
                    <img className="basket" src="https://cdn.shopify.com/s/files/1/0308/3426/2075/files/trolley.svg?181" alt="" />
                </a>
                <input className="search" name="search" placeholder="Поиск книг, авторов" type="text" onChange={putChange} />
                <button className='btn' onClick={progress}>найти</button>
            </form>
        </div>
    )
}
export default Menu