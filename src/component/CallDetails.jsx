import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Avatar from "@mui/material/Avatar";
import { BiMessageRounded } from "react-icons/bi";
import { IoCall } from "react-icons/io5";
import { IoMdVideocam } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";

import "../css/calldetail.css";
import moment from "moment";
import {
  Paper,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const CallDetails = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://aircall-job.herokuapp.com/activities/${id}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();

      setDetails(data);
    };
    getData();
  }, []);

  const archiveNumber = async (id, value) => {
    await fetch(`https://aircall-job.herokuapp.com/activities/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        is_archived: true,
      }),
    }).then((responese) => {
      if (responese.status === 200) {
        navigate("/archive", { replace: true });
      }
    });
  };

  return (
    <section style={{ height: 640 }}>
      <div className="avatar__wrapper">
        <Avatar className="avatar" src="/broken-image.jpg" />
        <p className="avatar__name">{details.from}</p>
      </div>
      <div className="avatar__buttons-wrapper">
        <Avatar className="avatar__buttons" variant="square">
          <BiMessageRounded size="40" />
          <span style={{ fontSize: "10px" }}>message</span>
        </Avatar>
        <Avatar className="avatar__buttons" variant="square">
          <IoCall size="40" />
          <span style={{ fontSize: "10px" }}>mobile</span>
        </Avatar>
        <Avatar className="avatar__buttons" variant="square">
          <IoMdVideocam size="40" />
          <span style={{ fontSize: "10px" }}>video</span>
        </Avatar>
        <Avatar className="avatar__buttons" variant="square">
          <HiOutlineMail size="40" />
          <span style={{ fontSize: "10px" }}>mail</span>
        </Avatar>
      </div>
      <Box className="caller__detail-wrapper">
        <Paper elevation={3} className="caller__details">
          <p>
            {moment(details.created_at).format("h:mm:ss a")} {details.call_type}
          </p>
          <p></p>
          <p>{details.via}</p>
          <p></p>
          <p>
            {details.direction} {details.duration} seconds
          </p>
        </Paper>
      </Box>

      <Box className="caller__detail-wrapper">
        <Paper elevation={3} className="caller__details">
          {details.to === null ? <p>Unkown</p> : <p>{details.to}</p>}
        </Paper>
      </Box>

      <Box className="caller__detail-wrapper">
        <Paper elevation={3} className="caller__details">
          <List>
            <ListItem button>
              <ListItemText secondary="Add to Favorites" />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText
                secondary="Archive"
                onClick={() => archiveNumber(details.id)}
              />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText secondary="Block this Caller" />
            </ListItem>
          </List>
        </Paper>
      </Box>
    </section>
  );
};

export default CallDetails;
