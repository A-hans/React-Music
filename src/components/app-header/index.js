import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderWrapper, HeaderLeft, HeaderRight, Nav } from './style';
import { Input,Button } from 'antd';
import {SearchOutlined} from '@ant-design/icons'

import { navLink } from '../../common/local-data';

function renderLink(item, index, list) {
  console.log(item.path);
  return (
    <li key={index}>
      {(index < 3 || index === list.length - 1) ?
        <NavLink to={item.path} replace className='nav-item' exact={index === 0}><em>{item.name}
              </em><sub className='sprite_01'>&nbsp;</sub></NavLink> :
        <a href={item.path} target='_blank' className='nav-item'><em>{item.name}</em></a>
      }
    </li>
  )
}

const HansAppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <div className='content'>
        <HeaderLeft >
          <NavLink to='/' className="sprite_01 logo" replace />
          <Nav>
            {navLink.map(renderLink)}
          </Nav>
        </HeaderLeft>
        <HeaderRight>
        <Input placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined style={{'fontSize':'14px'}} />}/>
        <Button shape='circle' ghost className='btn-creavite'>创作者中心</Button>
        <a href="#" className='a_login'>登录</a>
        </HeaderRight>
      </div>
      <div className='line'></div>
    </HeaderWrapper>
  )
})

export default HansAppHeader;