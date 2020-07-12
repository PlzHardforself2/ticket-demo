const UserModel: UserModelType = {
  namespace: 'user',
  state: {},
  reducers: {
      getList(state, {payload}){  // action = > {type, payload}
        // const data = {...} // 异步请求data转移到effect
        return payload;
      }
  },
  effects: {
      *getRemote(action, effects) {  // effects = { put , call}
          const data = {...}
          yield  put({
              type: 'getList',
              payload: data
          }) 
      }
  },
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
