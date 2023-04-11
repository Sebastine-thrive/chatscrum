import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { FiDelete } from 'react-icons/fi';
import { useLocalStorage } from '../LocalStorage';
import './tasks.css';


export default function Tasks(props) {
    const { weeklyTask, setWeeklyTask } = props;

    const [dailyTask, setDailyTask] = useLocalStorage('dailyTask', []);

    useEffect(() => {
        setDailyTask(dailyTask)
    }, [dailyTask, setDailyTask]);

    const deleteDailyTask = (id) => {
        let tasks = dailyTask;
        const remainingTasks = tasks.filter((task) => task.id !== id)
        setDailyTask(remainingTasks)
    }

    const handleOnDragEnd = result => {
        // getting the source and destination object
        const { source, destination } = result;
        if (!destination) {
            return;
        }

        if ((destination.droppableId === source.droppableId) && (destination.index === source.index)) return;

        if (source.droppableId === destination.droppableId) {
            if (source.droppableId === "weekly") {
                let tempWeeklyList = Array.from(weeklyTask)
                const [reorderedItem] = tempWeeklyList.splice(source.index, 1);
                tempWeeklyList.splice(destination.index, 0, reorderedItem);
                setWeeklyTask(tempWeeklyList)
            }
            else {
                let tempDailyList = Array.from(dailyTask);
                const [reorderedItem] = tempDailyList.splice(source.index, 1);
                tempDailyList.splice(destination.index, 0, reorderedItem);
                setDailyTask(tempDailyList)
            }
        } else {
            let tempWeeklyList = weeklyTask;
            let tempDailyList = dailyTask;

            if (source.droppableId === "weekly") {
                const [removed] = tempWeeklyList.splice(source.index, 1)
                let newItem = tempDailyList.splice(destination.index, 0, removed)

                setWeeklyTask([...tempWeeklyList])
                setDailyTask( [...tempDailyList])
            } else {
                const [removed] = tempDailyList.splice(source.index, 1);
                tempWeeklyList.splice(destination.index, 0, removed)

                setWeeklyTask([...tempWeeklyList]);
                setDailyTask([...tempDailyList]);
            }
        }
    }


    return (
        <DragDropContext onDragEnd={handleOnDragEnd}
        >
            <div className='task-container'>
                <div className='boxes'>
                    <Droppable droppableId='weekly'>
                        {(provided, snapshot) => (
                            <div className='weekly box'
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                style={{
                                    background: snapshot.isDraggingOver ? '#87b3df' : "#ecf0f3"
                                }}
                            >
                                <h3 id='table-title'> Weekly Tasks </h3>
                                {weeklyTask?.map(({ text, id }, index) => {
                                    return (
                                        <Draggable key={`${id}`} draggableId={`${id}`} index={index}>
                                            {(provided) => (
                                                <div key={`${id}`} ref={provided.innerRef}{...provided.dragHandleProps} {...provided.draggableProps}
                                                >
                                                    <div className='task weekly-task'>
                                                        <p className='text'> {text}  </p>
                                                    </div>
                                                </div>
                                            )}
                                        </Draggable>
                                    )
                                })}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>

                    <Droppable droppableId='daily'>
                        {(provided, snapshot) => (
                            <div className='daily box'
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                style={{
                                    background: snapshot.isDraggingOver ? ' #2c1915' : " #ecf0f3"
                                }}
                            >
                                <h3 id='table-title'> Daily Tasks</h3>
                                {dailyTask?.map(({ id, text }, index) => {
                                    return (
                                        <Draggable key={`${id}`} draggableId={`${id}`} index={index}>
                                            {(provided) => (
                                                <div key={`${id}`} ref={provided.innerRef}{...provided.dragHandleProps} {...provided.draggableProps}
                                                >
                                                    <div className='task daily-task'>
                                                        <p className='text'> {text}  </p>

                                                        <p className='delete-icon'> <FiDelete color='white' onClick={() => deleteDailyTask(id)} />
                                                        </p>

                                                    </div>

                                                </div>
                                            )}
                                        </Draggable>
                                    )
                                })}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>

                </div>
            </div >
        </DragDropContext >
    )
}
