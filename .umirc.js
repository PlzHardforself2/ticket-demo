// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  publicPath: './public/',
  // routes: [{
  //   path: '/',
  //   component: '../layouts/index',
  //   routes: [{
  //     path: '/',
  //     component: '../pages/index',
  //   }, ],
  // }, ],
  theme: {
    '@primary-color': '#FF6F00',
    'link-color': '#0066CC',
    '@menu-bg': '#F0F2F5',
    '@menu-item-active-bg': '#fbfcfc',
    '@success-color': '#FF6F00',
    '@warning-color': '#FF6F00',
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: {
          immer: true,
          hmr: false,
        },
        dynamicImport: false,
        title: 'ticket_demo',
        dll: false,
        locale: {
          default: 'zh-CN',
        },

        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
}
