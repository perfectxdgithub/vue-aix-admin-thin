/*
 * @Author: xd
 * @Date: 2022-12-13 14:20:42
 * @Description:
 */
import { Plugin as importToCDN } from "vite-plugin-cdn-import";

/**
 * Packege in 'cdn' mode only for extranet(not by default. 
 * If you need to use cdn mode, set VITE_CDN to true in .env.production)
 * 
 * The platform uses the domestic cdn: https://www.bootcdn.cn, 
 * but you can also choose https://unpkg.com or https://www.jsdelivr.com
 * 
 * Reminder: mockjs cannot be imported in cdn mode. Anerror will occur. 
 * the correct approach is for the production environment to remove mockjs 
 * and use the real back-end request
 * 
 * Note: The above mentioned use only for the external network is
 * not completely certain. If your company has relevant js and css files
 * deployed on the Intrannet, you can also modify the following configuration
 * accordingly to complete a set of internal cdn
 */
export const cdn = importToCDN({
    /**
     * name: corresponds to Module's Name down here
     * 
     * version: Automatically reads the version number of the cooresponding
     * pakege in the dependencies of local package.json
     * 
     * path: corresponds to the path of the following modules
     */
    prodUrl: "https://cdn.bootcdn.net/ajax/libs/{name}/{version}/{path}"
    modules: [
        {
            name: "vue",
            var: "Vue",
            path: "vue.global.prod.min.js"
        }, {
            name: 'vue-router',
            var: 'VueRouter',
            path: 'vue-router.global.min.js'
        }, {
            name: 'vue-i18n',
            var: 'VueI18n',
            path: 'vue-i18n.runtime.global.prod.min.js'
        },
        // vue-demi is not installed directly in the project, but Pinia is used, 
        // so vue-demi needs to be introduced before Pinia is introduced 
        {
            name: 'vue-demi',
            var: 'VueDemi',
            path: 'index.iife.min.js'
        },
        {
            name: 'element-plus',
            var: 'ElementPlus',
            path: 'index.full.min.js',
            css: 'index.min.css'
        }, {
            name: 'axios',
            var: 'axios',
            path:'axios.min.js'
        }, {
            name: 'dayjs',
            var: 'dayjs',
            path: 'dayjs.min.js'
        }, {
            name: 'echarts',
            var: 'echarts',
            path: 'echarts.min.js'
        }, {
            name: 'lodash',
            var: 'lodash',
            path: 'https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.21/lodash.min.js'
        }

    ]
})