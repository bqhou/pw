import React, { useEffect } from 'react'
import styles from './App.module.css'
import axios from 'axios'

const App = () => {

    useEffect(()=>{
        axios.get('https://yanchu.maoyan.com/api/mobile/comment/project/hotComment?projectId=233014&needUserComment=false&hotCommentLimit=10&optimus_risk_level=71&optimus_code=10&yodaReady=h5&csecplatform=4&csecversion=2.2.1').then(res=>{
            console.group(res.data)
        })

    },[])
    
  return (
    <div>
        <ul>
        <li className={styles.item}>hahhah</li>
        <li>good</li>
        </ul>
      
        </div>
  )
}

export default App