import React, {useState, useEffect, useContext} from 'react';
import { AuthContext } from '../Context/auth-context';
import { useHttpClient } from '../Reusable/Hooks/http-hook';
import './CoolBox.css'
import './AllPage.css';
import LoadingSpinner from '../Reusable/Loading/LoadingSpinner';
import CoolMessage from './CoolMessage';
import CoolLoading from '../Reusable/Loading/CoolLoading';


const DUMMY_MESSAGES = [ 
  {
    _id: 111,
    date: 12/16/2020,
    fName: "Scott",
    lName: "Billings",
    email: "email@email.com",
    phone: "333-333-3333",
    content: "Your Requests Suck",
    
}
]



const CoolBox = (props) => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [coolMessages, setCoolMessages] = useState();
  const [unreadButton, setUnreadButton] = useState(true);
  

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_GET_MESSAGES_URL}`,
          // 'http://localhost:5000/api/messages',
          'GET',
          null,
          {
            Authorization: `Bearer ${  auth.token}`,
          }
        );

        setCoolMessages(responseData.allMessages.reverse());
        
      } catch (err) {}
    };

    fetchMessages();
  }, [sendRequest]);

  const buttonToggle = () => {
    setUnreadButton(!unreadButton)
  }

  return (
    <>

    
    {isLoading && <div className="center">
      <CoolLoading/>
      </div>}
    
    {!isLoading && coolMessages && (<><div className="coolInboxContainer" />
      <div className="whyDoIDoThis">
      <h1>MESSAGES</h1>
      <div className="coolMessageLayout">
        <div className="boxButtonContainer">
          <div className={unreadButton ? "bigUnreadMessagesButton" : "unreadMessagesButton"}>
          <button className="iHateYou" type="button" onClick={buttonToggle}/>
            <p>UNREAD MESSAGES</p>
          </div>
          <div className={unreadButton ? "readMessagesButton" : "bigReadMessagesButton"}>
          <button className="iHateYou" type="button" onClick={buttonToggle}/>
            <p>READ MESSAGES</p>
          </div>

        </div>
      {unreadButton && <div className="innerCoolInbox">
        {coolMessages.reverse().map((message) => (
          <CoolMessage 
          key={message._id}
          messageId={message._id}
          date={message.date}
          firstName={message.fName}
          lastName={message.lName}
          email={message.email}
          phone={message.phone}
          message={message.content}
          read={false}
          
        />
        ))}
      </div>}

      {!unreadButton && <div className="innerCoolInbox">
        <div className="noMessages">
          <h1>No Read Messages</h1>
        </div>
        </div>}
      </div>
      </div>
      </>
      )}

    </>
  )
}

export default CoolBox;