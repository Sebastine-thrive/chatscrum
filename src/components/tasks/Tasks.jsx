import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// import { dailyTaskList } from "../static/Tasklist";
import './tasks.css';

export default function Tasks({ data, deleteTask }) {

    const [weeklyTask, setWeeklyTask] = useState(data);
    const [dailyTask, setDailyTask] = useState([]);

    useEffect(() => {
        setWeeklyTask(data)
    }, [data]);


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
                tempDailyList.splice(destination.index, 0, removed)

                setWeeklyTask(tempWeeklyList)
                setDailyTask(tempDailyList)
            } else {
                const [removed] = tempDailyList.splice(source.index, 1);
                tempWeeklyList.splice(destination.index, 0, removed)

                setWeeklyTask(tempWeeklyList);
                setDailyTask(tempDailyList);
            }
        }
    }

    console.log(weeklyTask)
    console.log(weeklyTask)


    return (
        <DragDropContext onDragEnd={handleOnDragEnd}
        >
            <div className='container'>
                <div className='boxes'>
                    <Droppable droppableId='weekly'>
                        {(provided, snapshot) => (
                            <div className='weekly box'
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                style={{
                                    background: snapshot.isDraggingOver ? '#87b3df' : " #2c1915"
                                }}
                            >
                                <h3> Weekly Tasks</h3>
                                {weeklyTask?.map(({ id, name, time_created, scrumgoalhistory_set }, index) => {
                                    return (
                                        <Draggable key={`${id}`} draggableId={`${id}`} index={index}>
                                            {(provided) => (
                                                <div key={`${id}`} ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}
                                                >
                                                    <p className='task'> {name} </p>
                                                    <div className='red'>
                                                        {time_created.slice(0, 10)} at {time_created.slice(12, 16)}
                                                    </div>

                                                    <div className='blue'>
                                                        {scrumgoalhistory_set.map(({ id, done_by }) => {
                                                            return (
                                                                <p key={`${id}`}> {done_by} </p>
                                                            )
                                                        })}

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
                                    background: snapshot.isDraggingOver ? ' #2c1915' : " #87b3df"
                                }}
                            >
                                <h3> Daily Tasks</h3>
                                {dailyTask?.map(({ id, content }, index) => {
                                    return (
                                        <Draggable key={`${id}`} draggableId={`${id}`} index={index}>
                                            {(provided) => (
                                                <div key={`${id}`} ref={provided.innerRef}{...provided.dragHandleProps} {...provided.draggableProps}
                                                >
                                                    <p className='task' onClick={() => { deleteTask(id) }}> {content} </p>
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