// import React from 'react'
// import { Link, useParams } from 'react-router-dom'


// function QuizData() {

//     const { mark } = useParams()
//     console.log(mark);

//     return (
//         <div className='d-flex justify-content-center align-items-center score_section' style={{ height: '100vh' }}>
//             <div className='contaner w-75 p-5 text-center scoreDetails '>
//                 <p>SCORE BOARD</p>
//                 <h1 className='mt-4 p-3'>Total Question : 10</h1>
//                 <h1 className='mt-4 p-3'>Total Score : 10</h1>
//                 <h1 className='mt-4 p-3'>Gained Score : {mark}</h1>

//                 <div className='d-flex justify-content-center mt-5'>
//                     <Link to={'/'}>
//                         <i class="fa-solid fa-house-signal fa-spin-pulse me-3 fa-2x text-primary"></i>
//                         <button className='btn btn-outline-warning'
//                             style={{ border: '3px solid green', color: 'black', fontFamily: 'Lobster, cursive' }}>Back To Home</button>
//                     </Link>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default QuizData




import React from 'react'

import { Link, useParams } from 'react-router-dom'

function QuizData() {

  const {mark}=useParams()
  console.log(mark);
  return (
    <div className='d-flex justify-content-center align-items-center ' style={{height:'100vh'}}>
      <div className='contaner w-50 p-5 text-center  '>
      <hr />
        <h1>SCORE CARD</h1>
    <hr />
      
        {/* <h1 className='mt-4 p-3'>Total Question : 10</h1>
        <h1 className='mt-4 p-3'>Total Score : 10</h1> */}
        <h1 className='mt-4 p-3'>Total Score : {mark}/5</h1>

        <div className='d-flex justify-content-center mt-5'>
          <Link to={'/'}>
        <button className='btn btn-primary' 
       >Back To Home</button>
        </Link>
     
      </div>
      </div>
    </div>
  )
}

export default QuizData;