import React , {PureComponent} from 'react'
import { CSSTransition } from 'react-transition-group'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
  SearchWrapper,
  Addition,
  Button
} from './style'

class Header extends PureComponent {

  getListArea = () => {
    const {
      mouseIn,
      focused,
      list,
      page,
      totalPage,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage
    } = this.props
    const jsList = list.toJS() // list 是一个immutable对象，转化成普通js对象
    const pageList= []
    if (jsList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
        ) 
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={()=>handleChangePage(page, totalPage, this.spinIcon)}>
              <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render() {
    const {
      focused,
      list,
      handleInputFocus,
      handleInputBlur,
      login,
      logout
    } = this.props
    return (
      <HeaderWrapper>
        <Link to='/'>
					<Logo/>
				</Link>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          {
            login ? <NavItem className='right' onClick={logout}>退出</NavItem> : <Link to='/login'><NavItem className='right'>登陆</NavItem></Link> 
          }
          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide">
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}>
              </NavSearch>
            </CSSTransition>
              <i className={focused ? 'focused iconfont zoom': 'iconfont zoom'}>
                &#xe614;
              </i>
              {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to='/write'>
            <Button className="writting">
              <i className="iconfont">&#xe615;</i>写文章
            </Button>
          </Link>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // focused: state.get('header').get('focused')
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage']),
    login: state.getIn(['login', 'login'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      if (!list.size) { // immutable对象的size属性
        dispatch(actionCreators.getList())
      }
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, ''); // 获取当前的旋转角度
			if (originAngle) {
				originAngle = parseInt(originAngle, 10);
			}else {
				originAngle = 0;
			}
			spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'; // 旋转角度加360
      const newPage = page < totalPage ? page + 1 : 1
      dispatch(actionCreators.changePage(newPage))
    },
    logout() {
      dispatch(loginActionCreators.logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
