import { Navigate, createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Category from '../pages/Home/Category/Category';
import NewsLayout from '../layouts/NewsLayout/NewsLayout';
import News from '../pages/News/News/News';
import LoginLayout from '../layouts/LoginLayout/LoginLayout';
import Login from '../pages/Login/Login';
import Register from '../pages/Login/Register';
import PrivateRoute from '../pages/shared/NavigationBar/PrivateRoute';
import Terms from '../pages/shared/Terms/Terms';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LoginLayout></LoginLayout>,
		children: [
			{
				path: '/',
				element: <Navigate to="/category/0"></Navigate>,
			},
			{
				path: '/login',
				element: <Login></Login>,
			},
			{
				path: '/register',
				element: <Register></Register>,
			},
			
		],
	},

	{
		path: 'category',
		element: <Main></Main>,
		children: [
			{
				path: ':id',
				element: <Category></Category>,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/categories/${params.id}`),
			},
		],
	},
	{
				path:'/terms',
				element:<Terms></Terms>
			},
	{
		path: ':id',
		element: <NewsLayout></NewsLayout>,
		children: [
			{
				path: ':id',
				element: (
					<PrivateRoute>
						<News></News>
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`http://localhost:5000/news/${params.id}`),
			},
		],
	},
]);

export default router;