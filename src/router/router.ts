import {createWebHistory} from "vue-router";
import {createRouter} from "@modus/ionic-vue";

const home = () => import("@/views/Home.vue");
const hello = () => import("@/components/HelloWorld.vue");
const history = createWebHistory();
const router = createRouter({
    history,
    routes: [
        {
            path: "/",
            component: home,
            meta: {
                title: "Home Page - Vue-Port Shop"
            }
        },
        {
            path: "/hello",
            component: hello,
            props: { msg: "Hello World!" },
            meta: {
                title: "Hello - Vue-Port Shop"
            }
        },
    ],
});

export default router;