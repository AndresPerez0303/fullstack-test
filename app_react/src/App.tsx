import './App.css'

// TODO: Importar componentes ProductList y ProductForm cuando estén creados
// import ProductList from './components/ProductList'
// import ProductForm from './components/ProductForm'

function App() {
  // TODO: Agregar estado para manejar la lista de productos
  // const [products, setProducts] = useState([])

  // TODO: Agregar función para refrescar productos después de crear o eliminar

  return (
    <div className="app-container">
      <header>
        <h1>Sistema de Gestión de Productos</h1>
        <p>Prueba Técnica Full Stack</p>
      </header>

      <main>
        {/* TODO: Agregar ProductForm aquí */}
        <div className="form-section">
          <h2>Agregar Nuevo Producto</h2>
          {/* <ProductForm onProductAdded={handleProductAdded} /> */}
        </div>

        {/* TODO: Agregar ProductList aquí */}
        <div className="list-section">
          <h2>Lista de Productos</h2>
          {/* <ProductList products={products} onProductDeleted={handleProductDeleted} /> */}
        </div>
      </main>
    </div>
  )
}

export default App



