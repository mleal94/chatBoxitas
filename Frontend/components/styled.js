import styled from 'styled-components'

export const HeaderWrap = styled.header`
  text-align: center;
  background-color: #5B36AC;
  color: white;
  padding:0.5em 0;
`
export const HeaderPanel = styled.ul`
  display: flex;
  justify-content: space-between;
  padding:0;
  margin:0;
  align-items: center;
`

export const HeaderPanelContents = styled.li`
  padding: 0.6em 0.8em;
`

export const Title = styled.h3`
  font-size:1rem;
  margin: 0;
`

//TODO Modificar pantalla de Login a una mas Bonita....
export const SelectUserWidget = styled.div`
  text-align: center;
  margin: 20vh auto;
  line-height: 2; 
  width: 670px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  position: relative;  
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px; 
`

export const SelectUserWrapper = styled.div`
  width: 100%;
  margin:0 auto;
  background-image: radial-gradient(circle at 29% 55%, hsla(329,0%,99%,0.05) 0%, hsla(329,0%,99%,0.05) 4%,transparent 4%, transparent 44%,transparent 44%, transparent 100%),radial-gradient(circle at 85% 89%, hsla(329,0%,99%,0.05) 0%, hsla(329,0%,99%,0.05) 51%,transparent 51%, transparent 52%,transparent 52%, transparent 100%),radial-gradient(circle at 6% 90%, hsla(329,0%,99%,0.05) 0%, hsla(329,0%,99%,0.05) 53%,transparent 53%, transparent 64%,transparent 64%, transparent 100%),radial-gradient(circle at 35% 75%, hsla(329,0%,99%,0.05) 0%, hsla(329,0%,99%,0.05) 6%,transparent 6%, transparent 98%,transparent 98%, transparent 100%),radial-gradient(circle at 56% 75%, hsla(329,0%,99%,0.05) 0%, hsla(329,0%,99%,0.05) 16%,transparent 16%, transparent 23%,transparent 23%, transparent 100%),radial-gradient(circle at 42% 0%, hsla(329,0%,99%,0.05) 0%, hsla(329,0%,99%,0.05) 3%,transparent 3%, transparent 26%,transparent 26%, transparent 100%),radial-gradient(circle at 29% 28%, hsla(329,0%,99%,0.05) 0%, hsla(329,0%,99%,0.05) 51%,transparent 51%, transparent 75%,transparent 75%, transparent 100%),radial-gradient(circle at 77% 21%, hsla(329,0%,99%,0.05) 0%, hsla(329,0%,99%,0.05) 35%,transparent 35%, transparent 55%,transparent 55%, transparent 100%),radial-gradient(circle at 65% 91%, hsla(329,0%,99%,0.05) 0%, hsla(329,0%,99%,0.05) 46%,transparent 46%, transparent 76%,transparent 76%, transparent 100%),linear-gradient(123deg, rgb(83, 91, 235),rgb(76, 11, 174));   
`

export const SelectList = styled.select`
  margin-right: 1em;
  height: 30px;
  border:1px solid #545869;
  font-size: 15px;
  color: #552055;
  line-height: 1.2;
  display: block;
  width: 50%;
  background: transparent;
  padding: 0 5px;
  margin: 0 auto;
`

export const SelectButton = styled.button`
  background-color: #464052;
  color: white;
  border: none;
  padding: 0.5em;
  border-radius: 7px;
  cursor:pointer;

  :disabled{
    background:gray;
    cursor:no-drop;
  }
`

export const ChatRoomPanel = styled.li`
  display:flex;
  padding:0.7em 1em;
  cursor:pointer;
  animation: fade-in 1s;

  :hover{
    background:#eee;
  }
`

export const ChatRoomDividerLeft = styled.div`
  flex:0 1 70%;
  overflow:hidden;
`

export const ChatRoomDividerRight = styled.div`
  flex:0 1 30%;
  text-align:right;
`

export const ChatRoomPanelImg = styled.img`
  width:5rem;
  height:5rem;
  border-radius:50%;
  border:1px solid #ddd;
  animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`
export const LoginPanelImg = styled.img`
  width:5rem;
  height:5rem;
  border-radius:50%;
  border:1px solid #ddd;
  animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`

export const ChatRoomPanelDesc = styled.div`
 float:left;
`

export const ChatRoomPanelPreview = styled.p`
  color:#A4A6B0;
  font-size:0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ChatRoomPanelTime = styled(ChatRoomPanelPreview)`
  margin-top:2vh;
  margin-bottom:0.2em;
`

export const ChatRoomPanelBadge = styled.b`
  background-color:#5B36AC;
  border-radius:50%;
  font-size:0.7rem;
  width:20px;
  height:20px;
  line-height:21px;
  color:white;
  display:inline-block;
  text-align:center;
  font-weight:400;
`

export const FooterWrap = styled.footer`
  border-top: 1px solid #eee;
  padding: 0.7em 0.5em;
  text-align:center;
  background: #f9f9fb;
`

export const FooterInput = styled.input`
  width: 80%;
  border-radius: 30px;
  height: 2em;
  line-height: 2em;
  outline: none;
  border: 1px solid #eee;
  padding: 0.8em;
  margin-right: 0.5em;
  box-shadow: 1px 1px 2px rgba(154, 154, 154, 0.6);
`

export const FooterSendButton = styled(SelectButton)`
  width: 45px;
  padding: 1em 0;
  border-radius: 50%;
  background: #5b36ac;
  vertical-align: middle;
`

export const ChatWidgetWrap = styled.ul`
  background:#f9f9fb;
  padding:1em;
  animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`

export const ChatWidgetLeft = styled.li`
  text-align:left;
  padding:1em 0;
`

export const ChatWidgetRight = styled.li`
  text-align:right;
  padding:1em 0;
`

export const ChatWidgetMessageLeft = styled.span`
  background:white;
  padding: 0.4em 0.6em;
  border: 1px solid #eee;
  border-radius: 10px;
  box-shadow: 1px 1px 2px rgba(234, 234, 234, 0.6);
`

export const ChatWidgetMessageRight = styled.span`
  background:#5B36AC;
  color:white;
  padding: 0.4em 0.6em;
  border: 1px solid #eee;
  border-radius: 10px;
  box-shadow: 1px 1px 2px rgba(234, 234, 234, 0.6);
`

export const PictureWrap = styled.ul`
  display:flex;
  justify-content: flex-start;
  overflow-x:scroll;
  animation: scale-up 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`

export const PictureContent = styled.li`
  flex: 0 1 auto;
  margin: 0 0.5em;
  cursor:pointer;
`

export const PictureImage = styled.img`
  width:50px;
  height:50px;
  border-radius: 5px;
`

export const PictureImageLarge = styled.img`
  width:100px;
  height:100px;
  border-radius: 5px;
`