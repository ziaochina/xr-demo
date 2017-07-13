export function getMeta(){
    return {
        name:'root',
        component:'::div',
        className: 'xr-template-root',
        children:{
        	name:'currentApp',
        	component:'AppLoader',
        	appName:'{{data.currentAppName}}',
        	onRedirect:'{{$onRedirect}}',
        	'...': '{{data.currentAppParams}}'
        }
    }
}