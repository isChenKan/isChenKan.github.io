module.exports = {
	title: '🌻葵花养殖技术人员',
	description: '前端技术博客',
	// dest: './public', // 设置输出目录
	base: '/', // 设置站点根路径
	themeConfig: {
		sidebar: [
			'/',
			'/20190430-sort/',
			'/20190430-tree/',
			'/20190430-mysql/',
			'/20190430-carousel/',
			'/20190501-deploy/',
		],
		sidebarDepth: 2,
	},
	head: [
		['link', { rel: 'icon', href: '/icon.ico' }],
		['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
		['link', { rel: 'manifest', href: '/site.webmanifest' }],
	],
	markdown: {
		lineNumbers: true
	},
	serviceWorker: true,
}
