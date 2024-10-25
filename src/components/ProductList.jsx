import {useState, useMemo} from 'react'

const ProductList = ({products}) => {

  const [category, setCategory] = useState('all');

  const filterProducts = useMemo(() => {
    console.log("filtering products.....")

    return products.filter(product => category === 'all' ? true : product.category === category)
  }, [category, products])

  return (
    <div>
<select onChange={(e) => setCategory(e.target.value)} value={category}>

  <option value="all">All</option>
  <option value="electronics">Electronics</option>
  <option value="fashion">Fashion</option> 
  
</select>

      <ul>
{filterProducts.map((product) => (
  <li key={product.id}>
   <h3> {product.name} </h3></li>
  ))}
      </ul>
    </div>
  )
}

export default ProductList