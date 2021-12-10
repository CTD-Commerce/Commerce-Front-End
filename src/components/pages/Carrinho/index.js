import { CarrinhoContext } from '../../../ContextApi/CarrinhoContext';
import { useContext } from 'react';

const Carrinho = () =>{
    const {cartItems} = useContext(CarrinhoContext)
    return (
        <>
        {cartItems.length > 0 && cartItems.map(item => {
            return (
                <h1>{item.id}</h1>
            )
        })}
        
        </>
    )
    


}

export default Carrinho;