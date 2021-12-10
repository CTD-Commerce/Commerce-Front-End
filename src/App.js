import './App.scss';
import CarrinhoContextProvider from './ContextApi/CarrinhoContext';
import RouteList from './routes';

function App() {
  return (
    <>
    <CarrinhoContextProvider>
      <RouteList />
    </CarrinhoContextProvider>
    </>
  );
}

export default App;
