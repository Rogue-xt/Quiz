import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from "react-router-dom";



function Quiz() {

    const [allQuestions, setAllQuestions] = useState([])
    const [activeIndex, setActiveIndex] = useState(0)
    const [score,setScore]=useState(0)
    const [option,setOption]=useState('')
    const [buttonClick,setButtonClick]=useState('')
    const [status,setStatus]=useState(true)

    const getData = async () => {
        const { data } = await axios('db.json')
        setAllQuestions(data.quiz)
    }


    useEffect(() => {
        getData()
    }, [])

    const navigate = useNavigate()

    const nextClick = () => {

        if (activeIndex < allQuestions.length - 1) {
            setActiveIndex(activeIndex + 1)
            setButtonClick('')
            setOption('')
            setStatus(true)
        }
        else {

            navigate(`/score/${score}`)
           
        }
    }

    const optionClick=(answer,e)=>{

        if(status==true){
            setButtonClick(e.target.id)
            if(answer==allQuestions[activeIndex].answer){
                setScore(score+1)
                setOption('correct')
                setStatus(false)
            }
            else{
                setOption('wrong')
                setStatus(false)
            
            }

        }
       

    }
   

    return (

        <div className='' style={{ height: '100vh',width:'100vw',backgroundColor:'white' }}>
            
            {allQuestions.length > 0 ? (
                <div className='container w-50 text-center p-5 question_section'>

                    <h3 style={{fontFamily:"-moz-initial"}} className='mt-5'>{activeIndex+1+')'} {allQuestions[activeIndex].question}</h3>


                        <div onClick={(e)=>optionClick((allQuestions[activeIndex].options[0]),e)} id='option1' 
                        className=' border border-black  text-black text-center p-3 mt-5' style={{fontSize:"x-large",fontFamily:"-moz-initial",fontSize:"x-large",borderRadius:'5px',backgroundColor:buttonClick=='option1'?(option=="correct"?('green'):('red')):("")}}>{allQuestions[activeIndex].options[0]}</div>

                        <div onClick={(e)=>optionClick((allQuestions[activeIndex].options[1]),e)} id='option2' 
                        className='border border-black  text-black text-center p-3 mt-3' style={{fontFamily:"-moz-initial",fontSize:"x-large",borderRadius:'5px',backgroundColor:buttonClick=='option2'?(option=="correct"?('green'):('red')):("")}}>{allQuestions[activeIndex].options[1]}</div>

                        <div onClick={(e)=>optionClick((allQuestions[activeIndex].options[2]),e)} id='option3' 
                        className='border border-black  text-black text-center p-3   mt-3' style={{fontFamily:"-moz-initial",fontSize:"x-large",borderRadius:'5px',backgroundColor:buttonClick=='option3'?(option=="correct"?('green'):('red')):("")}}>{allQuestions[activeIndex].options[2]}</div>

                        <div onClick={(e)=>optionClick((allQuestions[activeIndex].options[3]),e)} id='option4'
                         className='border border-black  text-black text-center p-3  mt-3' style={{fontFamily:"-moz-initial",fontSize:"x-large",borderRadius:'5px',backgroundColor:buttonClick=='option4'?(option=="correct"?('green'):('red')):("")}}>{allQuestions[activeIndex].options[3]}</div>

                    <div className=' text-center mt-5'>
                        <Button onClick={nextClick} variant="danger">Next</Button>
                    </div>

                </div>
            ) : (<h1>No Data</h1>)

            }

        </div>


    )
}

export default Quiz