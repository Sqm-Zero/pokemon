import SvgIcon from './SvgIcon/index.vue'
import Wave from './Wave/index.vue'
import Loading from './Loading/index.vue'
import ToTop from './ToTop/index.vue'
import Top from './Top/index.vue'
import Search from './Search/index.vue'

const allGlobalComponent: any = { Search, SvgIcon, Wave, Loading, ToTop, Top }
//对外暴露插件对象
export default {
  //插件对象中必须包含一个属性：install，值必须是一个函数
  install(app: any) {
    Object.keys(allGlobalComponent).forEach(key => {
      //注册为全局组件
      app.component(key, allGlobalComponent[key]);
    })
  }
}