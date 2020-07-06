import * as React from 'react';

import { User } from '../interfaces';

interface Props {
  item: User
}

const ListDetail: React.FunctionComponent<Props> = ({ item: user }: Props) => (
  <div>
    <h1>
      Detail for
      {user.name}
    </h1>
    <p>
      ID:
      {user.id}
    </p>
  </div>
);

export default ListDetail;
