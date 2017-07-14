import {fetch} from 'xr-utils'
import logo from './img/logo.png'

var _options = {
	loginApi : (user, password) => {
		return fetch.test('','',{
			result:true, 
			value: {
				user: {
					name: 'liujian zhang'
				}
			}
		})
	},
	rediectInfo: {
		appName: 'xr-template-portal',
		appParams: {}
	},
	logo:logo
}

function config(options) {
	if(options){
		_options = {..._options, ...options}
	}
}

config.getCurrent = () => _options

export default config