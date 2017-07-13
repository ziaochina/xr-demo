import { config, start, componentFactory } from 'xr-meta-engine'
import myConfig  from './config'

import xr_template_login from './apps/xr-template-login/index.js'
import xr_template_portal_about from './apps/xr-template-portal/apps/xr-template-portal-about/index.js'
import xr_template_portal_app1 from './apps/xr-template-portal/apps/xr-template-portal-app1/index.js'
import xr_template_portal_app2 from './apps/xr-template-portal/apps/xr-template-portal-app2/index.js'
import xr_template_portal from './apps/xr-template-portal/index.js'
import xr_template_root_about from './apps/xr-template-root/apps/xr-template-root-about/index.js'
import xr_template_root_helloWorld from './apps/xr-template-root/apps/xr-template-root-helloWorld/index.js'
import xr_template_root from './apps/xr-template-root/index.js'

const apps = {
	[xr_template_login.name]:xr_template_login,	
	[xr_template_portal_about.name]:xr_template_portal_about,	
	[xr_template_portal_app1.name]:xr_template_portal_app1,	
	[xr_template_portal_app2.name]:xr_template_portal_app2,	
	[xr_template_portal.name]:xr_template_portal,	
	[xr_template_root_about.name]:xr_template_root_about,	
	[xr_template_root_helloWorld.name]:xr_template_root_helloWorld,	
	[xr_template_root.name]:xr_template_root,	
}


config(myConfig({apps}))


import * as xrComponents from 'xr-component'

Object.keys(xrComponents).forEach(key=>{
	componentFactory.registerComponent(key, xrComponents[key])
})
	

start()