import { Draggable } from '@hello-pangea/dnd';
import { ListItem, ListItemText } from '@mui/material';

import style from './ListItem.module.css';

export function ListItemTextComponent({
  name,
  index,
}: {
  name: string;
  index: number;
}) {
  return (
    <>
      <Draggable draggableId={name} index={index}>
        {(provided) => {
          return (
            <ListItem
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              className={style['item']}
            >
              <ListItemText primary={name} />
            </ListItem>
          );
        }}
      </Draggable>
    </>
  );
}
