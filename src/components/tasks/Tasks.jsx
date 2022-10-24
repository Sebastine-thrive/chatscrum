import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { useLocalStorage } from '../LocalStorage';
// import { dailyTaskList } from "../static/Tasklist";
import './tasks.css';

export default function Tasks({ data }) {

    const [weeklyTask, setWeeklyTask] = useLocalStorage('weeklyTask', data);
    const [dailyTask, setDailyTask] = useLocalStorage('dailyTask', []);

    useEffect(() => {
        setWeeklyTask(data)
    }, [data]);


    // const SaveTasks = () => {
    //     setWeeklyTask(weeklyTask)
    //     useLocalStorage('weeklyTask', data)
    // }

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
    console.log(data)
    console.log(weeklyTask)
    // console.log(dailyTask)


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
                                <h3> Weekly Tasks </h3>
                                {weeklyTask?.map(({ text, id }, index) => {
                                    // console.log(content)
                                    return (
                                        <Draggable key={`${id}`} draggableId={`${id}`} index={index}>
                                            {(provided) => (
                                                <div key={`${id}`} ref={provided.innerRef}{...provided.dragHandleProps} {...provided.draggableProps}
                                                >
                                                    <p className='task' > {text} </p>
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
                                {dailyTask?.map(({ id, text }, index) => {
                                    return (
                                        <Draggable key={`${id}`} draggableId={`${id}`} index={index}>
                                            {(provided) => (
                                                <div key={`${id}`} ref={provided.innerRef}{...provided.dragHandleProps} {...provided.draggableProps}
                                                >
                                                    <p className='task' > {text} </p>
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
