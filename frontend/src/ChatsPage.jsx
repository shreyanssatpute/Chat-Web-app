import {PrettyChatWindow } from 'react-chat-engine-pretty'
const ChatsPage = (props) =>{
    return ( 
    <div style={{ height:'100vh' }}>
        <PrettyChatWindow
            projectId='65c2fdec-27bb-4463-9b5c-fa649be5a97d'
            username={props.user.username}
            secret={props.user.secret}
            style={{ height:'100%' }}
            />
    </div>
    )
}

export default ChatsPage