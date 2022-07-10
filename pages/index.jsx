import Layout from "../components/layout"
import Head from 'next/head'

export default function Home() {
	return (
		<div className="page main">
			<Head>
				<title>
					Pomodoro
				</title>
			</Head>
			<Layout></Layout>
		</div>
	)
}