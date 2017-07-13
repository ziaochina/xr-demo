var _options = {
	defaultAppName : 'xr-template-root-about',
	defaultAppParams: {}
}

function config(options) {
	if(options){
		_options = {... _options, ...options }
	}
	
}

config.getCurrent = () => _options

export default config