const Course = ({ courseCode, courseName }) => {

    const box = {  
        height: "120px", 
        width: "120px", 
        margin: "16px",
        padding: "20px",
        boxShadow: '8px 8px 8px rgba(18, 41, 59, 0.31)',
        borderRadius: '10px',
        backgroundColor: '#F9F9F9',
      }; 

      const code = {  
        width: "120px", 
        textAlign: 'left',
        fontWeight: 'bold',
      }; 

      const name = {  
        textAlign: 'left', 
      }; 


    return(
        <div style ={box}>
            <div style ={code}>{courseCode} </div>
            <br></br>
            <div style = {name}>{courseName} </div> 
        </div>
    )

}

export default Course