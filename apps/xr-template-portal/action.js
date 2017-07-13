import React from 'react'
import {Menu} from 'xr-component'
import { action as MetaAction, AppLoader } from 'xr-meta-engine'
import config from './config'

class action {
    constructor(option) {
        this.metaAction = option.metaAction
    }

    onInit = ({ component, injections }) => {
        this.component = component
        this.injections = injections
        injections.reduce('init')
    }


    getMenuChildren = () => {
        const menu = this.metaAction.gf('data.menu').toJS()
        const loop = (children) => {
            const ret = []
            children.forEach(child=>{

                if(!child.children){
                    ret.push(<Menu.Item key={child.key}>{child.name}</Menu.Item>)
                }
                else{
                    ret.push(<Menu.SubMenu key={child.key} title={child.name}>{loop(child.children)}</Menu.SubMenu>)
                }
            })
            return ret
        }
        return loop(menu)
    }

    handleMenuClick = (e) =>{

        const menu = this.metaAction.gf('data.menu').toJS()
        const find = (children) =>{
            for(let child of children){
                if(child.key == e.key){
                    return child
                }

                if(child.children){
                    let o = find(child.children)
                    if(o) return o
                }
            }
        }
        
        const hit = find(menu)
        if(hit){
            this.injections.reduce('setContent', hit.app, {})
        }
    }
}

export default function creator(option) {
    const metaAction = new MetaAction(option),
        o = new action({ ...option, metaAction }),
        ret = { ...metaAction, ...o }

    metaAction.config({ metaHandlers: ret })

    return ret
}