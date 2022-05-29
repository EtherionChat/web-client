import { Box } from '@mantine/core';
import classNames from 'classnames';
/* eslint-disable-next-line */
export interface ServerAvatarProps {
  children?: React.ReactNode;
}

export function ServerAvatar(props: ServerAvatarProps): JSX.Element {
  return (
    <svg width={5000} height={5000} viewBox="0 0 48 48" className="svg-2zuE5p" overflow="visible">
      <defs>
        <path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z" id="73cd1434-800b-4541-82be-2678e9757c21-blob_mask" />
      </defs>
      <mask id="73cd1434-800b-4541-82be-2678e9757c21" fill="black" x={0} y={0} width={48} height={48}>
        <use href="#73cd1434-800b-4541-82be-2678e9757c21-blob_mask" fill="white" />
      </mask>
      <foreignObject mask="url(#73cd1434-800b-4541-82be-2678e9757c21)" x={0} y={0} width={48} height={48}>
        <div className="wrapper-3kah-n" role="treeitem" data-list-item-id="guildsnav___967615920300228618" tabIndex={-1} aria-label="  Etherion UI">
          <img className="icon-3AqZ2e" src="https://cdn.discordapp.com/icons/967615920300228618/62580e5ac35c458551bfcb3ff2075f3f.webp?size=128" alt=" " width={48} height={48} aria-hidden="true" />
        </div>
      </foreignObject>
    </svg>
  );
}

export default ServerAvatar;
