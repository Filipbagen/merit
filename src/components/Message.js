import styled from "styled-components"

const Message = () => {

    // Style
    const Container = styled.div`
    margin-top: 0pt;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    `


    var today = new Date();
    var hourNow = today.getHours();
    var greeting;


    if (hourNow > 18) { // Kl 18
        greeting = 'Godkväll'
    } else if (hourNow > 12) { // Kl  12
        greeting = 'God eftermiddag'
    } else if (hourNow > 0) {   // Kl 00.00
        greeting = 'Godmorgon '
    } else {
        greeting = 'Välkommen!'
    }


    return (
        <div>
            <Container>
                document.write('<h3>' + greeting + '</h3>')
            </Container>
        </div>
    )
}
export default Message