export const mainRoutes = [{
    name: '概览',
    path: '/overview',
    disabled: true,
  },
  {
    name: '商品管理',
    path: '/shop',
    disabled: false,
    routes: [{
        name: '门票',
        path: '/shop/ticket',
        disabled: false,
      },
      {
        name: '套餐',
        path: '/shop/package',
        disabled: false,
      },
      {
        name: '年卡',
        path: '/shop/yearcard',
        disabled: true,
      },
      {
        name: '规格管理',
        path: '/shop/specification',
        disabled: false,
      },
    ],
  },
  {
    name: '预约管理',
    path: '/reserve',
    disabled: false,
  },
  {
    name: '订单管理',
    path: '/order',
    disabled: false,
    routes: [{
        name: '订单列表',
        path: '/order/orderlist',
        disabled: false,
      },
      {
        name: '退款管理',
        path: '/order/refund',
        disabled: false,
      },
    ],
  },
  {
    name: '企业管理',
    path: '/company',
    disabled: false,
  },
  {
    name: '景区管理',
    path: '/scenic',
    disabled: false,
  },
  {
    name: '分类管理',
    path: '/classify',
    disabled: false,
  },
  {
    name: '用户管理',
    path: '/users',
    disabled: false,
  },
  {
    name: '营销管理',
    path: '/marketing',
    disabled: true,
  },
  {
    name: '终端管理',
    path: '/terminal',
    disabled: true,
  },
  {
    name: '账户管理',
    path: '/account',
    disabled: false,
  },
]
