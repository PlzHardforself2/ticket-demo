import React, { useState } from 'react'
import { Menu } from 'antd'
import styles from './index.module.less'
import { mainRoutes } from '@/routerConfig'
import { useLocation } from 'react-router-dom'
import { Link } from 'umi'

const Cusider = () => {
  const location = useLocation()

  // 这里初始值使用函数计算得出，只在首次渲染中会执行
  const [defaultOpenKeys] = useState(() => {
    return mainRoutes.reduce((acc, item, index) => {
      if (!item.routes) {
        return acc
      }
      item.routes.forEach(subItem => {
        if (subItem.path === location.pathname) {
          acc.push(`${index}`)
        }
      })
      return acc
    }, [])
  })

  const renderMenus = list =>
    list.reduce((acc, item, index) => {
      // if (item.isHidden) {
      //   return acc
      // }
      if (item.routes === void 0) {
        acc.push(
          <Menu.Item key={item.path} disabled={item.disabled}>
            <Link to={item.path}>{item.name}</Link>
          </Menu.Item>,
        )
        return acc
      }
      acc.push(
        <Menu.SubMenu key={`${index}`} title={<span>{item.name}</span>}>
          {renderMenus(item.routes)}
        </Menu.SubMenu>,
      )
      return acc
    }, [])

  return (
    <div>
      <h3 className={styles.logo_title}>智慧票务</h3>
      <Menu
        mode="inline"
        theme="light"
        style={{ height: '100%', border: 'none' }}
        selectedKeys={[location.pathname]}
      >
        {renderMenus(mainRoutes)}
      </Menu>
    </div>
  )
}

export default Cusider
