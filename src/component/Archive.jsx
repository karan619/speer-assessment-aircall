import React, { useEffect, useState } from "react";
import { Paper, Box, ListItem, ListItemText, Divider } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { async } from "q";
const Archive = () => {
  let navigate = useNavigate();
  const [archiveData, setArchive] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://aircall-job.herokuapp.com/activities",
        {
          method: "GET",
        }
      );
      const data = await response.json();

      setArchive(data);
    };
    getData();
  }, []);

  const Unarchive = async (id) => {
    //console.log(id);
    await fetch(`https://aircall-job.herokuapp.com/activities/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        is_archived: false,
      }),
    }).then((responese) => {
      if (responese.status === 200) {
        navigate("/", { replace: true });
      }
    });
  };
  return (
    <>
      <section style={{ height: 640 }}>
        {archiveData.length > 0 &&
          archiveData.map((log) =>
            log.is_archived === true ? (
              <Box style={{ padding: "5px" }}>
                <Paper
                  elevation={3}
                  style={{ display: "flex", padding: "10px" }}
                >
                  <ListItem button>
                    <ListItemText primary={log.from} />
                  </ListItem>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => Unarchive(log.id)}
                  >
                    Unarchive
                  </Button>
                </Paper>
              </Box>
            ) : (
              <span></span>
            )
          )}
      </section>
    </>
  );
};

export default Archive;
