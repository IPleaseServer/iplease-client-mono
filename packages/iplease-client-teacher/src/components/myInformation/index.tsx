import React, { useState } from 'react';

import { Popover } from 'react-tiny-popover';

function MyInformation(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Popover
      isOpen={isOpen}
      positions={['bottom']}
      align="end"
      content={<div>Hi! Im popover content.</div>}
    >
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        내 정보
      </button>
    </Popover>
  );
}

export default MyInformation;
