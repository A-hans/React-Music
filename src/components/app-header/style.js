import styled from 'styled-components';

export const HeaderWrapper = styled.div `
    height:75px;
    background-color:#242424;
    .content{
        display: flex;
        width:1100px;
        height:70px;
        margin:0 auto;
    }
    .line{
        border-bottom: none;
        height:5px;
        background-color:#C20C0C;
    }
`

export const HeaderLeft = styled.div `
flex: 7;
display: flex;
align-items:center;
.logo{
    display: block;
    background-position: 0 0;
    width: 176px;
    height: 69px;
}
`

export const HeaderRight = styled.div `
flex: 3;
display: flex;
justify-content: space-around;
align-items: center;
.ant-input-affix-wrapper{
    width: 158px;
    border-radius: 24px;
    font-size: 12px;
}
.btn-creavite{
    border-radius: 24px;
    border: 1px solid #4F4F4F;
    color: #ccc;
    font-size: 12px;
    padding: 0 10px;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    font-size: 12px;
}
 
::-moz-placeholder { /* Mozilla Firefox 19+ */
font-size: 12px;
}
 
input:-ms-input-placeholder{
    font-size: 12px;
}
 
input::-webkit-input-placeholder{
    font-size: 12px;
}
.a_login{
    font-size: 12px;
    color: #ccc;
    &:hover{
        text-decoration: underline;
        color: #C20C0C;
    }
}
`
export const Nav = styled.ul `
display: flex;
margin-bottom: 0;
li{
    position: relative;
    .nav-item{
        display: block;
        text-align: center;
        line-height: 70px;
        font-size: 14px;
        color: #cccccc;
        padding: 0 19px;
        text-decoration: none;
        em{
            height:70px;
        }
        sub{    
            display: none;
            bottom: -1.25px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            background-position: -226px 0;
            width: 12px;
            height: 7px;
        }
        &:hover{
            background-color: rgba(0,0,0,0.7);
        }
        &.active{
            background-color: rgba(0,0,0,0.7);
            color: #fff;
        sub{
            display: block;
        }
    }
    }
    
}
`