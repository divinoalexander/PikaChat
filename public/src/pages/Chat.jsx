import React, { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import styled from "styled-components";
import { allUsersRoute, host } from "../utils/APIRoutes";
import ChatContainer from "../components/ChatContainer";
import Contacts from "../components/Contacts";
import Welcome from "../components/Welcome";

export default function Chat() {
  const navigate = useNavigate();
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const userData = localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY);
        if (!userData) {
          navigate("/login");
        } else {
          setCurrentUser(JSON.parse(userData));
        }
      } catch (error) {
        console.error("Error checking user:", error);
        navigate("/login");
      }
    };
    
    checkUser();
  }, [navigate]);

  useEffect(() => {
    if (currentUser) {
      socket.current = io(host);
      socket.current.emit("add-user", currentUser._id);

      return () => {
        if (socket.current) {
          socket.current.disconnect();
        }
      };
    }
  }, [currentUser]);

  const fetchContacts = useCallback(async () => {
    try {
      if (currentUser?.isAvatarImageSet) {
        const { data } = await axios.get(`${allUsersRoute}/${currentUser._id}`);
        setContacts(data);
      } else {
        navigate("/setAvatar");
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  }, [currentUser, navigate]);

  useEffect(() => {
    if (currentUser) {
      fetchContacts();
    }
  }, [currentUser, fetchContacts]);

  const handleChatChange = useCallback((chat) => {
    setCurrentChat(chat);
  }, []);

  return (
    <>
      <Container>
        <div className="container">
          <Contacts contacts={contacts} changeChat={handleChatChange} />
          {currentChat === undefined ? (
            <Welcome />
          ) : (
            <ChatContainer currentChat={currentChat} socket={socket} />
          )}
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #fafa6e;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;
