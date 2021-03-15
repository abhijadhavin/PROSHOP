//import React, { useState, useEffect } from 'react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import { listProducts } from '../actions/productActions'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
//import products from '../products'


const HomeScreen = ({match}) => {

	const keyword = match.params.keyword

	const pageNumber = match.params.pageNumber || 1

	//const [products, setProducts] = useState([]);	
	const dispatch = useDispatch();
	const productList = useSelector(state => state.productList)
	const { loading, error,  products, pages, page } = productList;

	useEffect(() => {
		/*
		const fetchProducts = async () => {
			const { data } = await axios.get('/api/products');
			setProducts(data);
		}
		fetchProducts();
		*/
		dispatch(listProducts(keyword, pageNumber))
	}, [dispatch, keyword, pageNumber]) 
	

	return (
		<>
			<Meta />
			{ !keyword ? ( <ProductCarousel /> ) : (
				<Link to='/'className='btn btn-light'> Go Back </Link>
			)}
			<h1>Latest Products</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger' key="message" > { error } </Message>
			) : ( 
				<>
					<Row>
						{products.map((product) => (
							<Col sm={12} md={6} lg={4} xl={3} >
								<Product product={product} />
							</Col>
						))}
					</Row>
					<Paginate pages={pages} page={page} keyword={ keyword ? keyword : ''} />
				</>
			) }
		</>
	)
}

export default HomeScreen
