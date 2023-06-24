import React, { useState } from 'react'
import styled from 'styled-components'

import { signout } from '../../utils/Icons'
import { menuItems } from '../../utils/menuItems'
import '../Singup/index'



function Navigation({active, setActive}) {
    const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
    
    return (
        <NavStyled>
            <div className="user-con">
                
                <div className="text">
                    <h2>ExpenzX</h2>
                    
                </div>
            </div>
            <br/>
            <br/>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active': ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            <div className="bottom-nav">
                <li onClick={handleLogout}>
                    {signout} Sign Out
                </li>
            </div>
        </NavStyled>
    )
}

const NavStyled = styled.nav`
    
    width: 200px;
    height: 100%;
   
    /* From https://css.glass */
background: transparent;


border: none;

   
    display: flex;
    flex-direction: column;
    justify-content: left;
    
    .bottom-nav{
        margin:30px;
    }

    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        margin:20px;
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        h2{
            font-family: 'Pacifico', cursive;
            font-size:2.5rem;
            color:black;
        }
        p{
            color: black;
        }
    }

    .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;
        margin:20px;
        li{
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: black;
            padding: 0.3rem;
            position: relative;
            i{
                color: black;
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }
    }

    .active{
        color: rgba(34, 34, 96, 1) !important;
        i{
            color: rgba(34, 34, 96, 1) !important;
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: rgb(59,59,139);
            background: linear-gradient(90deg, rgba(59,59,139,1) 0%, rgba(214,160,209,1) 0%);
            border-radius: 0 10px 10px 0;
        }
    }
`;

export default Navigation