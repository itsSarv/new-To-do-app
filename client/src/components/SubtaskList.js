import React from "react";
import AlertMsg from "./Alertmsg";
import AddInputGroup from "./AddInputGroup";
import SubtaskDetail from "./SubtaskDetail";

function SubtaskList({ subtasks }) {
  return (
    <>
      {subtasks && subtasks.length > 0 ? (
        <SubtaskDetail subtasks={subtasks} />
      ) : (
        <AlertMsg
          variant="danger"
          msg="No Subtasks Found. Add to get started...."
        />
      )}
      <AddInputGroup
        label="Add new Subtasks"
        Buttonname="Add Subtask "
        placeholder="Eg. Do Laundry"
        variant="primary"
      />
    </>
  );
}

export default SubtaskList;
