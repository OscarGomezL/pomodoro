import { useEffect, useState } from 'react'
//redux
import { legacy_createStore as createStore } from 'redux'
import allReducers from '../redux/reducers'
import { Provider } from 'react-redux'
//css
import '../styles/font-family.css'
import '../styles/reset.css'
import '../styles/global.css'
import '../styles/var.css'
import '../styles/header.css'
import '../styles/main.css'
import '../styles/timer.css'
import '../styles/tasks.css'
import '../styles/task.css'
import '../styles/swal2.css'

function MyApp({ Component, pageProps }) {
	const [store, setStore] = useState()
	useEffect(() => {
		setStore(createStore(allReducers, {log: JSON.parse(localStorage.getItem("User"))}))
		if(!localStorage.getItem('User')) {
			localStorage.setItem('User', JSON.stringify({tasks:[], colections:[], currentTask: null}))
		}
	}, [])
	if(store===undefined) return null 
	return (
	<Provider store={store}>
		<Component {...pageProps} />
	</Provider>
  )
}

export default MyApp