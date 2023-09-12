import React from 'react'
import { useState } from 'react'

const SelectionBtn = () => {
    const [counter, setCounter] = useState(1)

    const [message, setMessage] = useState([
        '1: Learn React',
        '2: Now Have HandSome Income:) ',
        '3: Invest your income :D',
        '4: Make Money',
        '5: Learn Web Development'
    ])

    const backHandler = () => {
        // console.log(' back handler')

        if(counter < 5){
            setCounter(counter + 1)
        }
    }

    const nextHandler = () => {
        // console.log('next handler')

        if(counter > 0){
            setCounter(counter - 1)
        }
    }

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '100px' }}>


                {Array.from([0, 1, 2, 3, 4, 5], x => (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50px', height: '50px', backgroundColor:counter >= x ? 'red': '#323946', borderRadius: '50%', textAlign: 'center', color: 'white', }}>
                        {
                            x
                        }
                    </div >
                ))}




            </div>
                        <p style={{textAlign:'center' , marginTop:'80px', padding:'50px', border:'1px solid red', color:'white'}}>
                            {message[counter -1]}
                        </p>
            <div style={{ display: 'flex', justifyContent: 'space-around', color: 'grey', }}>
                {Array.from(['back', 'next'], x => (
                    <button className="btn"  onClick={x == 'back' ? backHandler : nextHandler}>
                        {x}
                    </button>
               ))
                }
            </div>

        </>
    )
}


export default SelectionBtn