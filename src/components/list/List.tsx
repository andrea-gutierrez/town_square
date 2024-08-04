'use client';

import { ListItemTextComponent } from '@/components/list-item-text/ListItem';
import {
  DragDropContext,
  Droppable,
  OnDragEndResponder,
} from '@hello-pangea/dnd';
import { List } from '@mui/material';

export function ListComponent() {
  let postList = {
    posts: [
      { id: '32432', content: 'Mari' },
      { id: '3245', content: 'Hari' },
      { id: '5643', content: 'Nombre' },
    ],
  };

  const onDragEnd: OnDragEndResponder = (result) => {
    const { destination, source, draggableId } = result;
    console.log(destination, source, draggableId);
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    //
    // const column = postList.columns[source.droppableId];
    // const newTaskIds = Array.from(column.taskIds);
    // newTaskIds.splice(source.index, 1);
    // newTaskIds.splice(destination.index, 0, draggableId);
    //
    // const newColumn = {
    //   ...column,
    //   taskIds: newTaskIds,
    // };
    //
    // const newState = {
    //   ...postList,
    //   columns: {
    //     ...postList.columns,
    //     [newColumn.id]: newColumn,
    //   },
    // };
    // //
    // return newState;
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={'names'}>
          {(provided) => {
            return (
              <>
                <List ref={provided.innerRef} {...provided.droppableProps}>
                  {postList.posts.map((post, index) => (
                    <ListItemTextComponent
                      key={post.id}
                      name={post.content}
                      index={index}
                    />
                  ))}
                </List>
                {provided.placeholder}
              </>
            );
          }}
        </Droppable>
      </DragDropContext>
    </>
  );
}
