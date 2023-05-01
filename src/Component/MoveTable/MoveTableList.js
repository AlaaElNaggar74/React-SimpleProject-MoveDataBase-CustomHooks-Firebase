import React from "react";
import { useStateValue } from "../../Custom-Hook/useStateValue";
import EditeFieldCo from "../EditeFieldCo/EditeFieldCo";

import { useState } from "react";
const MoveTableList = ({
  ele,
  // isEditeSh,
  // setIsEditeSh,
  // setSelectedId,
  // selectedId,
  // setUpdmoveTitle,
  // setUpdmoveRele,
  // setUpdmoveDate,
  // setUpdmoveHou,
  // setUpdmoveAMPM,
  // setUpdmoveFeedB,
  // updmoveTitle,
  // updmoveRele,
  // updmoveDate,
  // updmoveHou,
  // updmoveAMPM,
  // updmoveFeedB,
}) => {
  let { deleFunc } = useStateValue();
  // console.log("xxxxxx", ele.title);

  let [isEditeSh, setIsEditeSh] = useState(false);
  let [selectedId, setSelectedId] = useState("");

  let [newT, setNewT] = useState("");
  let [updmoveRele, setUpdmoveRele] = useState("");
  let [updmoveDate, setUpdmoveDate] = useState("");
  let [updmoveHou, setUpdmoveHou] = useState("");
  let [updmoveAMPM, setUpdmoveAMPM] = useState("");
  let [updmoveFeedB, setUpdmoveFeedB] = useState("");

  return (
    <div className=" MoveTableList mb-3 " key={ele.id}>
      <div className="FeildInput  src1 mt-3 ">
        <div className="row bg-info p-1 align-items-end">
          <div className="inputTyp col-4">
            <input
              type="text"
              className="form-control fw-bolder"
              placeholder="Move Title"
              value={ele.title}
              disabled
            />
          </div>
          <div className="inputTyp col-1">
            <input
              type="text"
              className="form-control"
              placeholder="0000"
              value={ele.release}
              disabled
            />
          </div>
          <div className="inputTyp col-2">
            <input
              type="text"
              className="form-control"
              placeholder="1/2000"
              value={ele.date}
              disabled
            />
          </div>
          <div className="inputTyp col-1">
            <input
              type="text"
              className="form-control"
              placeholder="00:00"
              value={ele.houre}
              disabled
            />
          </div>
          <div className="inputTyp col-1">
            <input
              type="text"
              className="form-control"
              placeholder="Am/Pm"
              value={ele.time}
              disabled
            />
          </div>
          <div className="inputTyp col-1">
            <input
              type="text"
              className="form-control"
              placeholder="........."
              value={ele.feedback}
              disabled
            />
          </div>
          <div className="inputTyp col-2 text-center d-flex">
            <button
              className="btn btn-danger w-100 fw-bold me-1"
              onClick={() => {
                setIsEditeSh(!isEditeSh);
                setSelectedId(ele.id);

                setNewT(ele.title);
                setUpdmoveRele(ele.release);
                setUpdmoveDate(ele.date);
                setUpdmoveHou(ele.houre);
                setUpdmoveAMPM(ele.time);
                setUpdmoveFeedB(ele.feedback);
                console.log("element", {
                  newT,
                  updmoveRele,
                  updmoveDate,
                  updmoveHou,
                  updmoveAMPM,
                  updmoveFeedB,
                });
              }}
            >
              Edite
            </button>
            <button
              className="btn btn-danger w-100 fw-bold"
              onClick={() => {
                deleFunc(ele.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
        {isEditeSh && selectedId === ele.id ? (
          <EditeFieldCo
            setIsEditeShxc={setIsEditeSh}
            isEditeSh={isEditeSh}
            keepOldValu={{
              newT,
              updmoveRele,
              updmoveDate,
              updmoveHou,
              updmoveAMPM,
              updmoveFeedB,
            }}
            keepOldFunc={{
              setNewT,
              setUpdmoveRele,
              setUpdmoveDate,
              setUpdmoveHou,
              setUpdmoveAMPM,
              setUpdmoveFeedB,
            }}
            ele={ele}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MoveTableList;
