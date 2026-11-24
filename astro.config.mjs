// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://go-mist.github.io',
	base: '/mist-docs',
	integrations: [
		starlight({
			title: 'mist',
			description: 'SQL query builder for Go.',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/go-mist/mist' },
			],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Start',
					items: [
						{ label: 'Install', slug: 'install' },
						{ label: 'Define a table', slug: 'define' },
						{ label: 'Generate', slug: 'generate' },
						{ label: 'Connect', slug: 'connect' },
					],
				},
				{
					label: 'Queries',
					items: [
						{ label: 'Insert', slug: 'insert' },
						{ label: 'Select', slug: 'select' },
						{ label: 'Where', slug: 'where' },
						{ label: 'Update', slug: 'update' },
						{ label: 'Delete', slug: 'delete' },
						{ label: 'Transactions', slug: 'transactions' },
					],
				},
				{
					label: 'Go further',
					items: [
						{ label: 'Migrate', slug: 'migrate' },
						{ label: 'Dialects', slug: 'dialects' },
					],
				},
			],
		}),
	],
});
