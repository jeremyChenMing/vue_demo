import Vue from 'vue'
import { 
    Container,
    Header,
    Aside,
    Main,
    Button, 
    Badge,
    Tabs,
    TabPane,
    Checkbox,
    CheckboxGroup,
    Notification
} from 'element-ui'

Vue.use(Button)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Badge)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)

Vue.prototype.$notify = Notification;
