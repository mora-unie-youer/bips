import type { Component } from 'solid-js';
import { useRoutes } from 'solid-app-router';

import { routes } from './routes';

const App: Component = () => {
	const Route = useRoutes(routes);

	return (
		<>
			<p text-4xl text-green-700 text-center py-20 animate-bounce-alt animate-count-infinite animate-duration-3s>
				Hello <a
					text-pink-600 hover:font-bold hover:border-1
					href="https://antfu.me/posts/reimagine-atomic-css"
					target="atomic-css"
				>Atomic CSS</a>!
			</p>
			<main m-4>
				<Route />
			</main>
		</>
	);
};

export default App;
