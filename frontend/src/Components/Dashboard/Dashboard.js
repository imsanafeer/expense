import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { InnerLayout } from '../../styles/Layouts';
import { dollar, rupee } from '../../utils/Icons';
import Chart from '../Chart/Chart';
import Navigation from '../Navigation/Navigation';
import Chart2 from '../Chart/Chart2';
import Form from '../Form/Form';

function Dashboard() {
    const {totalExpenses,incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()
    const {title} = Form()
    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>Dashboard</h1>
                <br/><br/>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                        <br/>
                        <Chart2/>
                        <div className="amount-con">
                            <div className="income">
                                <h2>Total Income</h2>
                                <p>
                                    {rupee} {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h2>Total Expense</h2>
                                <p>
                                    {rupee} {totalExpenses()}
                                </p>
                            </div>
                            <div className="balance">
                                <h2>Total Balance</h2>
                                <p>
                                    {rupee} {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="history-con">
                        <History />
                        <h2 className="salary-title"><span>Income</span></h2>
                        <div className="salary-item">
                            <p>
                                Highest : &nbsp;
                                ₹{Math.max(...incomes.map(item => item.amount ))}
                               
                            </p>
                        </div>
                        <br/>
                        <div className="salary-item">
                            <p>
                                Lowest : &nbsp;
                                ₹{Math.min(...incomes.map(item => item.amount))}
                            </p>
                        </div>
                        <h2 className="salary-title"><span>Expense</span></h2>
                        <div className="salary-item">
                            <p>
                                Highest : &nbsp;
                                ₹{Math.max(...expenses.map(item => item.amount))}
                            </p>
                        </div>
                        <br/>
                        <div className="salary-item">
                            <p>
                                Lowest : &nbsp;
                                ₹{Math.min(...expenses.map(item => item.amount))}
                            </p>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
    .stats-con{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        .chart-con{
            grid-column: 1 / 4;
            height: 300px;
            .amount-con{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;
                margin-top: 2rem;
                .income, .expense{
                    grid-column: span 2;
                }
                .income, .expense, .balance{
                    /* From https://css.glass */
                    background: rgba(255, 255, 255, 0.41);
                    border-radius: 16px;
                    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                    
                    -webkit-backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 1);
                    padding: 1rem;
                    p{
                        font-size: 3.5rem;
                        font-weight: 700;
                    }
                }

                .balance{
                    grid-column: 2 / 4;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 350px;
                    padding-bottom:10px;
                    p{
                        color: var(--color-green);
                        opacity: 0.6;
                        font-size: 4.5rem;
                    }
                }
            }
        }

        .history-con{
            grid-column: 4 / -1;
            h2{
                margin: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .salary-title{
                font-size: 1.2rem;
                span{
                    font-size: 1.8rem;
                }
            }
            .salary-item{
                /* From https://css.glass */
                background: rgba(255, 255, 255, 0.41);
                border-radius: 16px;
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                
                
                border: 1px solid rgba(255, 255, 255, 1);
                padding: 1rem;
                
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    font-weight: 600;
                    font-size: 1.6rem;
                }
            }
        }
    }
`;

export default Dashboard