import React, { useState } from 'react'
import { Button, Input } from 'antd'
import styles from './index.less'
import { useHistory, useLocation } from 'react-router-dom'
import TicketList from './component/TicketList'

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

export default Ticket
