import React, { useState } from "react";
import { useStateValue } from "../../Custom-Hook/useStateValue";

const EditeFieldCo = ({
  setIsEditeShxc,
  isEditeSh,
  keepOldValu,
  keepOldFunc,
  ele,
}) => {
  let { upddFunc } = useStateValue();
  // console.log("keepOldValu.UpdmoveTitle", keepOldValu.UpdmoveTitle);

  let [tit, settit] = useState(keepOldValu.newT);
  let [rel, setrela] = useState(keepOldValu.updmoveRele);
  let [date, setdate] = useState(keepOldValu.updmoveDate);
  let [hou, setho] = useState(keepOldValu.updmoveHou);
  let [am, setam] = useState(keepOldValu.updmoveAMPM);
  let [feed, setfeed] = useState(keepOldValu.updmoveFeedB);
  return (
    <div className="EditeFieldCo ">
      <div className="row align-items-end mt-2 p-1 bg-warning">
        <div className="inputTyp col-4">
          <input
            type="text"
            value={tit}
            className="form-control"
            placeholder="Move Title"
            onChange={(e) => {
              settit(e.target.value);
            }}
          />
        </div>
        <div className="inputTyp col-1">
          <input
            type="text"
            className="form-control"
            placeholder="0000"
            value={rel}
            onChange={(e) => {
              setrela(e.target.value);
            }}
          />
        </div>
        <div className="inputTyp col-2">
          <input
            type="text"
            className="form-control"
            placeholder="1/2000"
            value={date}
            onChange={(e) => {
              setdate(e.target.value);

              // setMoveHou,
              // setMoveAMPM,
              // setMoveFeedB,
            }}
          />
        </div>
        <div className="inputTyp col-1">
          <input
            type="text"
            className="form-control"
            placeholder="00:00"
            value={hou}
            onChange={(e) => {
              setho(e.target.value);
              // setMoveAMPM,
              // setMoveFeedB,
            }}
          />
        </div>
        <div className="inputTyp col-1">
          <input
            type="text"
            className="form-control"
            placeholder="Am/Pm"
            value={am}
            onChange={(e) => {
              setam(e.target.value);

              // setMoveFeedB,
            }}
          />
        </div>
        <div className="inputTyp col-1">
          <input
            type="text"
            className="form-control"
            placeholder="........."
            value={feed}
            onChange={(e) => {
              setfeed(e.target.value);
            }}
          />
        </div>
        <div className="inputTyp col-2 text-center d-flex">
          <button
            className="btn btn-danger w-100 fw-bold me-1"
            onClick={() => {
              setIsEditeShxc(!isEditeSh);

              upddFunc(ele.id, tit, rel, date, hou, am, feed);
            }}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditeFieldCo;
