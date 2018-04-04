module.exports = {
    routes: [
        {
            path: '/pageOne',
            component: resolve => require.ensure([], () => resolve(require('./components/pageOne.vue')), 'pageOne')
        },
        {
            path: '/pageTwo',
            component: resolve => require.ensure([], () => resolve(require('./components/pageTwo.vue')), 'pageTwo')
        }
    ]
}