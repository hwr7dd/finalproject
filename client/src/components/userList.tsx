import { IonInput,IonContent,IonButton,IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent, IonItem } from "@ionic/react";
import React from "react";
import './adduser.css';
import { useIsScreenReaderEnabled, useSpeak  } from '@capacitor-community/react-hooks/accessibility';

const UserList = ({ tasks, updateTasks }) => {
    const clickDeleteTask = (event, task) => {
      event.preventDefault()
      fetch(`/api/tasks/delete/${task._id}`, {
        method: 'delete',
      })
        .then(res => res.json())
        .then(() => updateTasks());
    };
    const toggleEdit = task => {
        fetch(`/api/tasks/update/${task._id}`, {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ Name: task.Name,Quantity:task.Quantity,edit:true }),
        }).then(() => updateTasks());
      };
    const onSubmitEdit = task => {
        fetch(`/api/tasks/update/${task._id}`, {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ Name: task.Name,Quantity:task.Quantity,edit:false }),
        }).then(() => updateTasks());
      };
    const fruited={
        Name:"",
        Quantity:0,
        edit:false
      };
  const { speak } = useSpeak();
  const {isScreenReaderEnabled} = useIsScreenReaderEnabled();
  const[updated,setUpdate]=React.useState(fruited);
  const [updateList,setUpdateList]=React.useState([]);
  const handleEdit= (index) =>{
    if(updateList[index].edit==false){
     const copied=[...updateList]
     const item2 = {...updateList[index]};
     item2.edit= true;
     copied[index]=item2;
     setUpdateList(copied);
   }else{
     const copied=[...updateList]
     const item2 = {...updateList[index]};
     item2.edit=false;
     copied[index]=item2
     setUpdateList(copied)}
   };
   const onChangeEdit =(task)=> (e: React.ChangeEvent<HTMLInputElement>) => {
     setUpdate((prevState) => ({
       ...prevState,
       [e.target.id]: e.target.value,
     }));
   };

   return (
   <div>
{tasks.map(task=>{
return(
      <div key={task._id}>
    <IonCard>
      <IonCardHeader >
        <IonCardTitle  >
          Item: {task.Name} 
        </IonCardTitle>
        <IonCardSubtitle >
          Quantity: {task.Quantity}
        </IonCardSubtitle>
      </IonCardHeader>
      <IonButton color="danger"onClick={event => clickDeleteTask(event, task)}>Remove Item </IonButton>
      {isScreenReaderEnabled?<IonButton color="primary"onClick={() =>speak({value:"Test"})}>Speak Name </IonButton>:
      <IonButton color="danger">Screen Reader Disabled </IonButton>
      }
      <IonButton color="warning" onClick={()=>toggleEdit(task)}>Edit Item </IonButton>
   </IonCard>
   {task.edit? 
   <div >
     <form onSubmit={()=>onSubmitEdit(task)} >
    <label className='labels' htmlFor="Name">Name: </label>
    <input type="text" id="Name"  onChange={onChangeEdit(task)} />
    <label className='labels' htmlFor="Quantity">Quantity: </label>
    <input  type="number" id="Quantity"  onChange={onChangeEdit(task)} />
    <IonButton color="warning" type="submit" onClick={()=>handleEdit(task)}>Submit Changes</IonButton>
  </form></div>:null }
    </div>)
})
} 
</div>);};
export default UserList;
