import React, { useEffect, useState } from "react";
import "../css/activitydetails.css";
import { useNavigate } from "react-router-dom";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PhoneCallbackOutlinedIcon from "@mui/icons-material/PhoneCallbackOutlined";

import moment from "moment";

const Calls = () => {
  let navigate = useNavigate();
  const [logs, setLogs] = useState([]);

  const logInfo = (id) => {
    navigate(`/calls/${id}`, { replace: true });
  };
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://aircall-job.herokuapp.com/activities",
        {
          method: "GET",
        }
      );
      const data = await response.json();

      //let key = "from";
      //let sortData = sorttedData(data, key);

      setLogs(data);
    };
    getData();
  }, []);

  return (
    <>
      <div className="call__wrapper">
        {logs.length > 0 &&
          logs.map((log) =>
            log.is_archived === false ? (
              <section className="call__section-wrapper" key={log.id}>
                <div className="call__section-wrapper-left">
                  <div className="call__section-left">
                    <PhoneCallbackOutlinedIcon />
                    <p style={{ paddingLeft: "10px" }}>{log.from}</p>
                  </div>
                  {log.to === null ? (
                    <p>tried to call Unkown</p>
                  ) : (
                    <p>tried to call on {log.to}</p>
                  )}
                </div>

                <div className="call__section-wrapper-right">
                  <p>{moment(log.created_at).format("h:mm:ss a")}</p>
                  <InfoOutlinedIcon
                    className="info__button"
                    onClick={() => logInfo(log.id)}
                  />
                </div>
              </section>
            ) : (
              <span></span>
            )
          )}
      </div>
    </>
  );
};

export default Calls;
