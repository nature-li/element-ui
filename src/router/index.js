import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout1 from '@/components/layout/Layout1'
import Layout2 from '@/components/layout/Layout2'
import Layout3 from '@/components/layout/Layout3'
import Layout4 from '@/components/layout/Layout4'
import Layout5 from '@/components/layout/Layout5'
import Layout6 from '@/components/layout/Layout6'
import Container1 from '@/components/container/Container1'
import Container2 from '@/components/container/Container2'
import Icon1 from '@/components/icon/Icon1'
import Button1 from '@/components/button/Button1'
import Button2 from '@/components/button/Button2'
import Button3 from '@/components/button/Button3'
import Button4 from '@/components/button/Button4'
import Button5 from '@/components/button/Button5'
import Button6 from '@/components/button/Button6'
import Radio1 from '@/components/radio/Radio1'
import Radio2 from '@/components/radio/Radio2'
import Radio3 from '@/components/radio/Radio3'
import Radio4 from '@/components/radio/Radio4'
import Radio5 from '@/components/radio/Radio5'
import Checkbox1 from '@/components/checkbox/Checkbox1'
import Checkbox2 from '@/components/checkbox/Checkbox2'
import Checkbox3 from '@/components/checkbox/Checkbox3'
import Checkbox4 from '@/components/checkbox/Checkbox4'
import Checkbox5 from '@/components/checkbox/Checkbox5'
import Checkbox6 from '@/components/checkbox/Checkbox6'
import Checkbox7 from '@/components/checkbox/Checkbox7'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/checkbox1',
      name: 'Checkbox1',
      component: Checkbox1
    },
    {
      path: '/checkbox2',
      name: 'Checkbox2',
      component: Checkbox2
    },
    {
      path: '/checkbox3',
      name: 'Checkbox3',
      component: Checkbox3
    },
    {
      path: '/checkbox4',
      name: 'Checkbox4',
      component: Checkbox4
    },
    {
      path: '/checkbox5',
      name: 'Checkbox5',
      component: Checkbox5
    },
    {
      path: '/checkbox6',
      name: 'Checkbox6',
      component: Checkbox6
    },
    {
      path: '/checkbox7',
      name: 'Checkbox7',
      component: Checkbox7
    },
    {
      path: '/layout1',
      name: 'Layout1',
      component: Layout1
    },
    {
      path: '/layout2',
      name: 'Layout2',
      component: Layout2
    },
    {
      path: '/layout3',
      name: 'Layout3',
      component: Layout3
    },
    {
      path: '/layout4',
      name: 'Layout4',
      component: Layout4
    },
    {
      path: '/layout5',
      name: 'Layout5',
      component: Layout5
    },
    {
      path: '/layout6',
      name: 'Layout6',
      component: Layout6
    },
    {
      path: '/container1',
      name: 'Container1',
      component: Container1
    },
    {
      path: '/container2',
      name: 'Container2',
      component: Container2
    },
    {
      path: '/icon1',
      name: 'Icon1',
      component: Icon1
    },
    {
      path: '/button1',
      name: 'Button1',
      component: Button1
    },
    {
      path: '/button2',
      name: 'Button2',
      component: Button2
    },
    {
      path: '/button3',
      name: 'Button3',
      component: Button3
    },
    {
      path: '/button4',
      name: 'Button4',
      component: Button4
    },
    {
      path: '/button5',
      name: 'Button5',
      component: Button5
    },
    {
      path: '/button6',
      name: 'Button6',
      component: Button6
    },
    {
      path: '/radio1',
      name: 'Radio1',
      component: Radio1
    },
    {
      path: '/radio2',
      name: 'Radio2',
      component: Radio2
    },
    {
      path: '/radio3',
      name: 'Radio3',
      component: Radio3
    },
    {
      path: '/radio4',
      name: 'Radio4',
      component: Radio4
    },
    {
      path: '/radio5',
      name: 'Radio5',
      component: Radio5
    }
  ]
})
