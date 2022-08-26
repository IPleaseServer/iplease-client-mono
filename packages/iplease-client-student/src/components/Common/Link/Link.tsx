import { css } from '@emotion/react';
import { Link as RouterLink } from 'react-router-dom';

import { colors, theme } from '@common/styles';

type HrefType = {
  name: string;
  to: string;
};

interface LinkProps {
  href: HrefType | HrefType[];
}

const Link: React.FC<LinkProps> = ({ href }) => {
  const style = css`
    * {
      color: ${colors.pink};
      font-size: ${theme.palette.fontSize.extraSmall};
      font-weight: ${theme.palette.fontWeight.regular};
    }
  `;

  return (
    <div css={style}>
      {Array.isArray(href) ? (
        href.map(({ name, to }, i) => (
          <>
            {i !== 0 && <span>&nbsp;/&nbsp;</span>}
            <RouterLink key={to} to={to}>
              {name}
            </RouterLink>
          </>
        ))
      ) : (
        <RouterLink to={href.to}>{href.name}</RouterLink>
      )}
    </div>
  );
};

export default Link;
