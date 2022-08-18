export default {
    install(Vue, options) {
        console.log('options', options)
        Vue.prototype.myMethod = function () {
            console.log('自定义插件')
            return 'clear'
        }
    }
}
