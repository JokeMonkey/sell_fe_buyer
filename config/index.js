// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
	build: {
		env: require('./prod.env'),
		index: path.resolve(__dirname, '../dist/index.html'),
		assetsRoot: path.resolve(__dirname, '../dist'),
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		productionSourceMap: false,
		// Gzip off by default as many popular static hosts such as
		// Surge or Netlify already gzip all static assets for you.
		// Before setting to `true`, make sure to:
		// npm install --save-dev compression-webpack-plugin
		productionGzip: false,
		productionGzipExtensions: ['js', 'css'],
		port: 9000,
        	sellUrl: 'http://127.0.0.1',
        	openidUrl: 'http://sell.springboot.cn/sell/wechat/authorize',
        	wechatPayUrl: 'http://127.0.0.1'
	},
	dev: {
		env: require('./dev.env'),
		port: 8088,
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
    proxyTable: {

      '/sell': {

        target: 'http://localhost:8080',//要访问的后端接口

        changeOrigin: true,

        pathRewrite: {
          '^/api': '/'
//这里的配置是正则表达式，以/api开头的将会被用用‘/api'替换掉，假如后台文档的接口是 /api/list/xxx
//前端api接口写：axios.get('/api/list/xxx') ， 被处理之后实际访问的是：http://news.baidu.com/api/list/xxx
        }
      }},
		// CSS Sourcemaps off by default because relative paths are "buggy"
		// with this option, according to the CSS-Loader README
		// (https://github.com/webpack/css-loader#sourcemaps)
		// In our experience, they generally work as expected,
		// just be aware of this issue when enabling this option.
		cssSourceMap: false,
		sellUrl: 'http://127.0.0.1',
		openidUrl: 'http://127.0.0.1',
		wechatPayUrl: 'http://127.0.0.1'
	}
}
