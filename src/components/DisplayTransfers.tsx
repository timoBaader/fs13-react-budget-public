import React from 'react'

import DisplayTransferProps from '../interfaces/DisplayTransferProps'

const DisplayTransfers: React.FC<DisplayTransferProps> = ({account, type}: DisplayTransferProps ) => {
  return (
    <div>
        <div>
            <h2>{type === "income" ? <h2>Income: </h2> : <h2>Expenses: </h2>}</h2>
            <div>
                {type === "income" && account.income.map((item, index) => {
                    return <div key={index}>{item.amount} + {item.label} + {item.date}</div>
                })}
                {type === "expense" && account.expense.map((item, index) => {
                    return <div key={index}>{item.amount} + {item.label} + {item.date}</div>
                })}
            </div>
            </div>
        <div>
        </div>
    </div>
  )
}

export default DisplayTransfers