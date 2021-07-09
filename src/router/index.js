import Vue from "vue";
import VueRouter from "vue-router";
import PageOne from '../components/PageOne';
import PageTwo from '../components/PageTwo';
import PageThree from '../components/PageThree';

Vue.use(VueRouter);

const router = new VueRouter ({
    routes: [
        {
            path:'*',
            redirect:'/PageOne'
        },
        {
            path: "/PageOne",
            component: PageOne
        },
        {
            path: "/PageTwo",
            component: PageTwo
        },
        {
            path: "/PageThree",
            component: PageThree
        }
    ]
})

export default router;