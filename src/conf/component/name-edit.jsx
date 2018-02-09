import React from 'react';
import { observer } from 'mobx-react';

const NameEdit = ({ user, action }) => (
  <div className="NameEdit">
    <div className="NameEdit_Label">Name</div>
    <input
      className="NameEdit_Input"
      type="text"
      maxLength={10}
      value={user.dispName}
      onChange={ev => action.$update('user.dispName', ev.target.value)}
    />
  </div>
);

export default observer(NameEdit);
