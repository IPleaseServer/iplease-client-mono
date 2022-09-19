import { useQuery } from 'react-query';

import { getProfileUsingId } from 'src/api/profile';

interface UserNameProps {
  id: number;
  key: string;
}

function UserName({ id, key }: UserNameProps): JSX.Element {
  const { data, isLoading, isError } = useQuery<string>(
    ['getProfile', id, key],
    () => getProfileUsingId(id)
  );

  if (isLoading) return <>loading</>;

  if (isError || !data) return <>error</>;

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{data}</>;
}

export default UserName;
