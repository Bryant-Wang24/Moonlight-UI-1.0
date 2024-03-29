import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./views/switch/SwitchDemo.vue"
import ButtonDemo from "./views/button/ButtonDemo.vue"
import DialogDemo from "./views/dialog/DialogDemo.vue";
import TabsDemo from "./views/tab/TabsDemo.vue";

// import PopupDemo from "./views/popup/PopupDemo.vue"

import { h } from "vue";
import Markdown from "./components/Markdown.vue";
import intro from './markdown/intro.md'
import getStarted from './markdown/get-started.md'
import install from './markdown/install.md'
const history = createWebHashHistory();
const md = (string: string) =>
  h(Markdown, { content: string,key:string})
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "", redirect: '/doc/intro' },
        { path: "intro", component: md(intro) },
        { path: "get-started", component: md(getStarted) },
        { path: "install", component: md(install) },
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
        // { path: "popup", component: PopupDemo },
      ],
    },
  ],
});
router.afterEach(() => {
  console.log("路由切换了");
});