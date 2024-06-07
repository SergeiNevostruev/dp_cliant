import { Button } from 'antd';
import { DragEvent, MouseEventHandler } from 'react';

const SideBar = ({ onSave }: { onSave: MouseEventHandler<HTMLElement> }) => {
  const onDragStart = (event: DragEvent<HTMLDivElement>, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
      <div className='description'>Панель управления</div>
      <div
        className='dndnode input'
        onDragStart={(event) => onDragStart(event, 'input')}
        draggable
      >
        Input Node
      </div>
      <div
        className='dndnode'
        onDragStart={(event) => onDragStart(event, 'default')}
        draggable
      >
        Default Node
      </div>
      <div
        className='dndnode output'
        onDragStart={(event) => onDragStart(event, 'output')}
        draggable
      >
        Output Node
      </div>
      <Button onClick={onSave}>Сохранить</Button>
    </aside>
  );
};

export default SideBar;
