import React, { useState, useEffect } from "react";
import "./TaskBoards.css";
import EditIcon from "../../assets/EditIcon.png";
import Yellow5 from "../../assets/Yellow5.png";
import Plus from "../../assets/Plus.png";
import Delete from "../../assets/Delete.png";
import FileIcon from "../../assets/FileIcon.png";
import Message from "../../assets/Message.png";
import ThreeDots from "../../assets/ThreeDots.png";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import UserFirst from "../../assets/UserFirst.png";
import UserSecond from "../../assets/UserSecond.png";
import UserThird from "../../assets/UserThird.png";

function TaskBoards() {
  const [columns, setColumns] = useState(() => {
    const savedColumns = localStorage.getItem("taskColumns");
    return savedColumns
      ? JSON.parse(savedColumns)
      : {
          "Backlog Tasks": [],
          "To do Tasks": [],
          "In Process": [],
          Done: [],
        };
  });

  useEffect(() => {
    localStorage.setItem("taskColumns", JSON.stringify(columns));
  }, [columns]);

  const handleDragStart = (e, card, columnName) => {
    e.dataTransfer.setData("card", JSON.stringify(card));
    e.dataTransfer.setData("columnName", columnName);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, columnName) => {
    const droppedCard = JSON.parse(e.dataTransfer.getData("card"));
    const sourceColumnName = e.dataTransfer.getData("columnName");

    if (columnName !== sourceColumnName) {
      const updatedColumns = { ...columns };
      const sourceColumnIndex = updatedColumns[sourceColumnName].findIndex(
        (card) => card.id === droppedCard.id
      );

      if (sourceColumnIndex !== -1) {
        updatedColumns[sourceColumnName].splice(sourceColumnIndex, 1);
        updatedColumns[columnName].push(droppedCard);
        setColumns(updatedColumns);
      }
    }
  };

  const addCard = (columnName) => {
    const newCard = {
      id: `${columnName}-${new Date().getTime()}`,
      content:
        "Brainstorming brings team members' diverse experience into play.",
    };
    setColumns((prevColumns) => ({
      ...prevColumns,
      [columnName]: [...prevColumns[columnName], newCard],
    }));
  };

  const deleteCard = (columnName, cardId) => {
    setColumns((prevColumns) => ({
      ...prevColumns,
      [columnName]: prevColumns[columnName].filter(
        (card) => card.id !== cardId
      ),
    }));
  };

  return (
    <div className="task_board">
      <div className="heading_taskboard">
        <div className="left_part_head">
          <h1>Task Boards</h1>
          <div className="left_part_head_img">
            <img src={EditIcon} alt="" />
          </div>
        </div>
        <div className="right_part_head">
          <input type="text" placeholder="search Tasks" id="" />
        </div>
      </div>
      <div className="content_taskboard">
        {Object.entries(columns).map(([columnName, cards]) => (
          <div
            key={columnName}
            className="content_column column"
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, columnName)}
          >
            <div className="content_head">
              <div className="left_content_head">
                <p>
                  <strong>{columnName}</strong>
                </p>
                <div className="content_icon">
                  <img src={Yellow5} alt="" />
                </div>
              </div>
              <div className="right_content_head">
                <div className="content_icon">
                  <img src={ThreeDots} alt="" />
                </div>
              </div>
            </div>
            <div className="content_content_part">
              <div className="first_row">
                <div
                  className="first_row_img content_icon"
                  onClick={() => addCard(columnName)}
                >
                  <img src={Plus} alt="" />
                </div>
              </div>
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="content_task_card"
                  draggable
                  onDragStart={(e) => handleDragStart(e, card, columnName)}
                >
                  <div className="content_task_card_head">
                    <p>
                      <strong>Task</strong>
                    </p>
                    <div
                      className="delete_btn content_icon"
                      onClick={() => deleteCard(columnName, card.id)}
                    >
                      <img src={Delete} alt="" />
                    </div>
                  </div>
                  <p>{card.content}</p>
                  <div className="bottom_frame">
                    <div className="icons">
                      <div className="file_icon">
                        <div className="content_icon">
                          <img src={FileIcon} alt="" />
                        </div>
                        <p>2</p>
                      </div>
                      <div className="msg_icon">
                        <div className="content_icon">
                          <img src={Message} alt="" />
                        </div>
                        <p>4</p>
                      </div>
                    </div>
                    <div className="groups">
                      <AvatarGroup max={4}>
                        <Avatar
                          style={{ height: "20px", width: "20px" }}
                          alt="Remy Sharp"
                          src={UserFirst}
                        />
                        <Avatar
                          style={{ height: "20px", width: "20px" }}
                          alt="Travis Howard"
                          src={UserSecond}
                        />
                        <Avatar
                          style={{ height: "20px", width: "20px" }}
                          alt="Cindy Baker"
                          src={UserThird}
                        />
                      </AvatarGroup>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskBoards;
