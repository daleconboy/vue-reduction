// See original Vue issue filed by @chinesedfan
// https://github.com/vuejs/vue/issues/8545

process.env.VUE_ENV = 'server';

const Vue = require('vue');
const renderer = require('vue-server-renderer').createRenderer({});

Vue.component('c-child', {
    template: '<div class="c-child"></div>'
});

const vueInstance = new Vue({
    template: `<div class="root">
        <c-child v-for="(x, i) in items" :key="i"></c-child>
    </div>`,
    data: {
        items: Array(1000).fill(0)
    }
})

console.log('start to renderToString...');
renderer.renderToString(vueInstance, (error, html) => {
    if (error) {
        console.error(`render error!\n${error.stack}`);
        return;
    }

    console.log(html);
});
