import config from './config'
import * as api from './api'

export default {
	name: "xr-template-portal",
	version:"1.0.0",
	description:"xr-template-portal",
	meta : api.getMeta(),
	components:[],
	config:config,
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'), require('./action'), require('./reducer'))
		}, "xr-template-portal")
	}
}