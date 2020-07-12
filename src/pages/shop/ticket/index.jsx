import React, { useState } from 'react'
import { Button, Input } from 'antd'
import styles from './index.less'
import { useHistory, useLocation } from 'react-router-dom'
import TicketList from './component/TicketList'
// import { connect } from 'dva'
// import { connnet } from 'umi'

const Ticket = () => {
  // const history = useHistory()
  // const location = useLocation()

  return (
    <>
      <div className={styles.ticket_content}>
        <h1>门票</h1>
        <div className={styles.entry_wrap}>
          <Button type="primary" size="middle">
            新建门票
          </Button>
        </div>
        <TicketList />
      </div>
    </>
  )
}

// redux 内容相关
// const mapStateToProps = ({users}) = {   //传入参数为state对象 users为namespace  return数据为users
//   return {
//     users,
//   }
// }

// export default connect(mapStateToProps)(Ticket)

export default Ticket
