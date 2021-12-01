import styled from 'styled-components'

const Content = styled.div`
    display: flex;
    flex-direction: column;
`

const Dropzone = styled.div`
    background-color: #D7C0D0;
    heigth: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const White = styled.div`
    width: 100%;
    border-radius: 44px 44px 0px 0px;
    min-height: 80vh;
    background-color: gray;
`

const Background = ({ children }) => {
  return (
    <Content>
      <Dropzone>
        {children}
        <White style={{ height: 200 }} />
      </Dropzone>
    </Content>
  )
}

export default Background
