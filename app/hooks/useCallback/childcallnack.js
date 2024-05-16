'use client'
import { memo } from "react";

function ChildCompoentUsecallback({ count }) {
  console.log("child render");
  return (
    <div>
      <p>
        Message received from parent :-
        <span style={{ color: "red" }}>{count}</span>
      </p>
    </div>
  );
}
export default memo(ChildCompoentUsecallback);