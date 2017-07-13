import {Toast,Notification, Modal } from 'xr-component'

var _options

function config(options) {
	_options = options
	_options.targetDomId = 'app'
	_options.startAppName = 'xr-template-root' //xr-template-root
	options.apps['xr-template-root'].config({defaultAppName:'xr-template-login'})

	_options.toast = Toast
	_options.notification = Notification
	_options.modal = Modal
	return _options
}

config.getCurrent = () => _options

export default config