// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkBreaks from 'remark-breaks'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Web笔记',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'HTML5 笔记',
					items: [
						{ label: 'HTML5 语义标签', slug: 'html5' },
					],
				},
				{
					label: 'CSS3 笔记',
					items: [
						{ label: 'CSS3 核心技术', slug: 'css3/1' },
						{ label: '现代网页布局', slug: 'css3/2' },
						{ label: '交互动效设计', slug: 'css3/3' },
						{ label: '前沿技术拓展', slug: 'css3/4' },
						{ label: '移动网页与响应网页开发', slug: 'css3/5' },
					],
				},
				{
					label: 'Javascript 笔记',
					items: [
						{ label: 'JS 基础', slug: 'javascript/1' },
						{ label: 'WEB APIs', slug: 'javascript/2' },
						{ label: 'jQuery 笔记', slug: 'javascript/jquery' },
					],
				},
			],
		}),
	],
	markdown: {
		remarkPlugins: [remarkBreaks]
	}
});
