import { Map } from 'immutable'
import { reducer as MetaReducer } from 'xr-meta-engine'
import config from './config'

class reducer {
    constructor(option) {
        this.metaReducer = option.metaReducer
    }

    init = (state, option) => {
        const data = { data: {
            menu:[{
                key:'1',
                name:'about',
                app:'xr-template-portal-about'
            },{
                key:'2',
                name:'apps',
                children:[{
                    key:'201',
                    name:'app1',
                    app:'xr-template-portal-app1'
                },{
                    key:'202',
                    name:'app2',
                    app:'xr-template-portal-app2'
                }]
            }],
            menuDefaultSelectedKeys:['1'],
            menuDefaultOpenKeys:['2'],
            content:{
                appName: 'xr-template-portal-about',
                appParams:{}
            }
        } }
        return this.metaReducer.init(state, data)
    }

    setContent = (state, appName, appProps) =>{
        state = this.metaReducer.sf(state, 'data.content.appName', appName)
        state = this.metaReducer.sf(state, 'data.content.appParams', appProps)
        return state
    }
}

export default function creator(option) {
    const metaReducer = new MetaReducer(option),
        o = new reducer({ ...option, metaReducer })

    return { ...metaReducer, ...o }
}