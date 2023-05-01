import React, { useState } from "react";
import { useStateValue } from "../../Custom-Hook/useStateValue";
import EditeFieldCo from "../EditeFieldCo/EditeFieldCo";
import MoveTableList from "../MoveTable/MoveTableList";

import "./MoveDataBase.css";

const MoveDataBase = () => {
  let { moveList, addFunc } = useStateValue();
  // console.log(moveList);

  let [isShow, setIsShow] = useState(false);

  let [moveTitle, setMoveTitle] = useState("");
  let [moveRele, setMoveRele] = useState("");
  let [moveDate, setMoveDate] = useState("");
  let [moveHou, setMoveHou] = useState("");
  let [moveAMPM, setMoveAMPM] = useState("");
  let [moveFeedB, setMoveFeedB] = useState("");

  // console.log("updmoveTitle",updmoveTitle)

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="headerPage mt-3 text-center">
            <h1>Move Liberary</h1>
            <p className="mt-1"> List Of All Move I Watch</p>
          </div>
          <div className="EnterDataSection ">
            <div className="Buttonnn text-center">
              <button
                className="btn btn-danger"
                onClick={() => {
                  setIsShow(!isShow);
                }}
              >
                {!isShow ? "Show Add Field" : "Hidde Add Field"}
              </button>
            </div>
            {isShow ? (
              <div className="">
                <div className="FeildInputsrc scr mt-3">
                  <div className="row src1 align-items-end">
                    <div className="inputTyp col-4">
                      <p>Move Title</p>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Move Title"
                        value={moveTitle}
                        onChange={(e) => {
                          setMoveTitle(e.target.value);
                        }}
                      />
                    </div>
                    <div className="inputTyp col-1">
                      <p>Release</p>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="0000"
                        value={moveRele}
                        onChange={(e) => {
                          setMoveRele(e.target.value);
                        }}
                      />
                    </div>
                    <div className="inputTyp col-2">
                      <p>Date</p>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="1/2000"
                        value={moveDate}
                        onChange={(e) => {
                          setMoveDate(e.target.value);
                        }}
                      />
                    </div>
                    <div className="inputTyp col-1">
                      <p>Houre Time</p>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="00:00"
                        value={moveHou}
                        onChange={(e) => {
                          setMoveHou(e.target.value);
                        }}
                      />
                    </div>
                    <div className="inputTyp col-1">
                      <p>AM/PM</p>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Am/Pm"
                        value={moveAMPM}
                        onChange={(e) => {
                          setMoveAMPM(e.target.value);
                        }}
                      />
                    </div>
                    <div className="inputTyp col-1">
                      <p>FeedBack</p>
                      <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="........."
                        value={moveFeedB}
                        onChange={(e) => {
                          setMoveFeedB(e.target.value);
                        }}
                      />
                    </div>
                    <div className="inputTyp col-2 text-center">
                      <button
                        className="btn btn-danger w-100 fw-bold"
                        onClick={() => {
                          if (
                            moveTitle !== "" &&
                            moveRele !== "" &&
                            moveDate !== "" &&
                            moveHou !== "" &&
                            moveAMPM !== "" &&
                            moveFeedB !== ""
                          ) {
                            addFunc({
                              moveTitle,
                              moveRele,
                              moveDate,
                              moveHou,
                              moveAMPM,
                              moveFeedB,
                            });
                            setMoveTitle("");
                            setMoveRele("");
                            setMoveDate("");
                            setMoveHou("");
                            setMoveAMPM("");
                            setMoveFeedB("");
                          }
                        }}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="ListOfMove">
            <h1 className="text-center mt-5">All Moves I Watch</h1>
            <div className="table scr ">
              <div className="row src1">
                <div className="inputTyp col-4 ">
                  <h5>Move Title</h5>
                </div>
                <div className="inputTyp col-1">
                  <h5>Release</h5>
                </div>
                <div className="inputTyp col-2">
                  <h5>Date</h5>
                </div>
                <div className="inputTyp col-1">
                  <h5>Houre</h5>
                </div>
                <div className="inputTyp col-1">
                  <h5>AM/PM</h5>
                </div>
                <div className="inputTyp col-1">
                  <h5>FeedBack</h5>
                </div>
                <div className="inputTyp col-2 text-center">
                  <h5>Option</h5>
                </div>
              </div>

              {moveList.map((ele) => (
                <div key={ele.id}>
                  <MoveTableList
                    ele={ele}
                    // isEditeSh={isEditeSh}

                    // setIsEditeSh={setIsEditeSh}

                    // setSelectedId={setSelectedId}
                    // selectedId={selectedId}
                    // setUpdmoveTitle={setUpdmoveTitle}
                    // setUpdmoveRele={setUpdmoveRele}
                    // setUpdmoveDate={setUpdmoveDate}
                    // setUpdmoveHou={setUpdmoveHou}
                    // setUpdmoveAMPM={setUpdmoveAMPM}
                    // setUpdmoveFeedB={setUpdmoveFeedB}
                    // updmoveTitle={updmoveTitle}
                    // updmoveRele={updmoveRele}
                    // updmoveDate={updmoveDate}
                    // updmoveHou={updmoveHou}
                    // updmoveAMPM={updmoveAMPM}
                    // updmoveFeedB={updmoveFeedB}
                  />
                </div>
              ))}
              {/* {isEditeSh && selectedId===Iitem.id?<EditeFieldCo setIsEditeSh={setIsEditeSh} />:""} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoveDataBase;
