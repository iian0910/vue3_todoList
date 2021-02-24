module.exports = {
  publicPath: process.env.VUE_APP_ENV === 'production'
    ? '/vue3_todoList/dist/'
    : '/'
}
