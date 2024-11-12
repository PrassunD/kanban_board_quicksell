import { React } from "react";
import { useSelector } from "react-redux";
import { ReactComponent as Add } from "../icons_FEtask/add.svg"
import { ReactComponent as Grey } from "../icons_FEtask/SVG - Urgent Priority grey.svg"
import { ReactComponent as Urgent } from "../icons_FEtask/SVG - Urgent Priority colour.svg"
import { ReactComponent as Canceled } from "../icons_FEtask/Cancelled.svg"
import { ReactComponent as Backlog } from "../icons_FEtask/Backlog.svg"
import { ReactComponent as Done } from "../icons_FEtask/Done.svg"
import { ReactComponent as LowIcon } from "../icons_FEtask/Img - Low Priority.svg"
import { ReactComponent as MediumIcon } from "../icons_FEtask/Img - Medium Priority.svg"
import { ReactComponent as HighIcon } from "../icons_FEtask/Img - High Priority.svg"
import { ReactComponent as Threedot } from "../icons_FEtask/3 dot menu.svg"
import { BiAdjust } from "react-icons/bi";
import { DiCodeigniter } from "react-icons/di";

import "./DashBoard.css";
import Card from "../Card/Card";
const DashBoard = () => {
  const isStatus = localStorage.getItem("group") === "status";
  const isPriority = localStorage.getItem("group") === "priority";
  console.log("stat", isStatus, "prio", isPriority);
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );
  console.log("rere", user);
  return (
    selectedData && (
      <div
        className="dashContainer"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        {selectedData.map((element, index) => {
          const cardWidthPercentage = 18.7;
          return (
            <div
              key={index}
              className="dashCardContainer"
              style={{ width: `${cardWidthPercentage}%` }}
            >
              <div className="dashCardHeading flex-sb">
                <div className="leftView">
                  {user ? (
                    <div
                      className="imageContainer relative"
                      style={{

                        width: "10px",
                        height: "15px",
                        display: "inline-block",
                      }}
                    >
                    </div>
                  ) : isStatus ? (
                    <div
                      className="cardTitle"
                      style={{
                        width: "15px",
                        height: "15px",
                        display: "inline-block",
                        fontWeight: 200,
                      }}
                    >
                      {element[index].title === "Backlog" ? (
                        <Backlog style={{ fontSize: "13px" }} />
                      )
                        : element[index].title === "Todo" ? (
                          <Grey
                            style={{ fontSize: "13px", color: "#ddeded" }}
                          />
                        ) : element[index].title === "In progress" ? (
                          <BiAdjust
                            style={{ fontSize: "13px", color: "#f2d750" }}
                          />
                        ) : element[index].title === "Done" ? (
                          <Done className="correct" />
                        ) : (
                          <Canceled />
                        )}
                    </div>
                  ) : isPriority ? (
                    <div
                      className="tags color-grey"
                      style={{
                        width: "35px",
                        height: "30px",
                        display: "inline-block",
                      }}
                    >
                      {element[index].title === "Low" ? (
                        <LowIcon style={{ fontSize: "13px" }} /> // Use <LowIcon /> for Low priority
                      ) : element[index].title === "Medium" ? (
                        <MediumIcon style={{ fontSize: "13px" }} /> // Use <MediumIcon /> for Medium priority
                      ) : element[index].title === "High" ? (
                        <HighIcon style={{ fontSize: "13px" }} /> // Use <HighIcon /> for High priority
                      ) : element[index].title === "Urgent" ? (
                        <Urgent style={{ fontSize: "13px" }} /> // Use <UrgentIcon /> for Urgent priority
                      ) : (
                        <Threedot style={{ fontSize: "13px" }} /> // Fallback icon if none of the cases match
                      )}
                    </div>
                  ) : (
                    <DiCodeigniter />
                  )}
                  <span>
                    {element[index]?.title} {element[index].value?.length}
                  </span>
                </div>
                <div className="rightView">
                  <Add />{" "}
                  <span style={{ letterSpacing: "2px" }}><Threedot/></span>
                </div>
              </div>
              <div className="dashList flex-gap-10">
                {element[index]?.value?.map((element, ind) => {
                  return (
                    <Card
                      id={element.id}
                      title={element.title}
                      tag={element.tag}
                      status={element.status}
                      priority={element.priority}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
        {isStatus && (
          <>
            <div className="dashCardHeading flex-sb">
              <div className="leftView" style={{ fontSize: "15px", marginRight: "90px", wordSpacing: "4px" }}>
                <div
                  className="cardTitle"
                  style={{
                    width: "13px",
                    height: "13px",
                    display: "inline-block",
                    fontWeight: 200,
                  }}
                >
                  <Done style={{ color: "blue" }} />
                </div>{" "}
                <span style={{ fontSize: "13px", fontWeight: "lighter" }}>Done</span> <span style={{ fontSize: "13px", color: "#8F9997" }}>0</span>
              </div>
              <div className="rightView">
                <Add />{" "}
                <span style={{ letterSpacing: "2px" }}>...</span>
              </div>
            </div>
            <div className="dashCardHeading flex-sb">
              <div className="leftView" style={{ fontSize: "15px", marginRight: "60px", wordSpacing: "4px" }}>
                <div
                  className="cardTitle"
                  style={{
                    width: "9px",
                    height: "9px",
                    display: "inline-block",
                    fontWeight: 200,
                  }}
                >
                  <Canceled style={{ color: "grey" }} />
                </div>{" "}
                <span style={{ fontSize: "13px", fontWeight: "lighter" }}>Canceled</span> <span style={{ fontSize: "13px", color: "#8F9997" }}>0</span>
              </div>
              <div className="rightView">
                <Add />{" "}
                <span style={{ letterSpacing: "2px" }}>...</span>
              </div>
            </div>
          </>
        )}
      </div>
    )
  );
};
export default DashBoard;
