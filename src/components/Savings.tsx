import React, { useState } from "react";

import AccountProp from "../interfaces/AccountProp";

const Savings: React.FC<AccountProp> = ({account}: AccountProp ) => {
  const [target, setTarget] = useState(0);


  return (
    <div>
      <div>
        <label htmlFor="target">Set target</label>
        <input
          type="text"
          id="target"
          name="target"
          onChange={(e) => setTarget(parseInt(e.target.value))}
        />
        <button onClick={() => setTarget(0)}>Reset</button>
      </div>
      <div>Current saving: {account.savings}</div>

      {target > 0 && (
        <div>
          <div>Target: {target}</div>{" "}
          <div>Progress: {(100 / target) * account.savings}%</div>
        </div>
      )}
    </div>
  );
};

export default Savings;
