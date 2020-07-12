const UserModel: UserModelType = {
  namespace: 'user',
  state: {},
  reducers: {},
  effects: {},
  subscriptions: {
    setup({ dispatch, history }) {
      return history.location(({ pathname }) => {
        if (pathname === '/uses') {
          dispatch({
            type: 'getList',
          })
        }
      })
    },
  },
}
