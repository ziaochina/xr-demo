export function getMeta(){
	return {
		name: 'root',
		component: 'Layout',
		className: 'xr-template-portal',
		children: [{
			name: 'header',
			component:'Layout',
			className:'header',
			children:[{
				name:'left',
				component:'Layout',
				className:'header-left',
				children:[{
					name:'siteName',
					component:'::h1',
					children:'xr-template-portal'
				}]
			},{
				name:'right',
				component:'Layout',
				className:'header-right'
			}]
		},{
			name:'content',
			component:'Layout',
			className:'content',
			children:[{
				name:'left',
				component:'Layout',
				className:'content-left',
				children:[{
					name:'menu',
					component:'Menu',
					mode:'inline',
					theme:'dark',
					defaultSelectedKeys:"{{data.menuDefaultSelectedKeys}}",
          			defaultOpenKeys:"{{data.menuDefaultOpenKeys}}",
					onClick:'{{$handleMenuClick}}',
					children:'{{$getMenuChildren()}}'
				}]
			},{
				name:'main',
				component:'Layout',
				className:'content-main',
				children:{
		        	name:'app',
		        	component:'AppLoader',
		        	appName:'{{data.content.appName}}',
		        	'...': '{{data.content.appParams}}'
        		}
			}]
		}]
	}
}



