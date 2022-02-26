import { lazy } from 'solid-js';
import type { RouteDefinition } from 'solid-app-router';

export const routes: RouteDefinition[] = [
	{
		path: '/',
		component: lazy(() => import('./pages/index')),
	},
	{
		path: '/bip32',
		component: lazy(() => import('./pages/bip32')),
	},
	{
		path: '/bip39',
		component: lazy(() => import('./pages/bip39')),
	},
];
