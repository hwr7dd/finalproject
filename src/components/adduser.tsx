import { IonInput,IonContent,IonButton,IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent, IonItem } from "@ionic/react";
import {useState,useEffect,useRef} from "react";
import './adduser.css'

const fruited={
  Name:"",
  Quantity:0,
  edit:false
};


export default function App() {
  const [fruit, setfruit] = useState(fruited);
  const[updated,setUpdate]=useState(fruited);
  const [updateList,setUpdateList]=useState([]);
  const [fruitList,setFruitList]=useState([]);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setfruit((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
    console.log(fruit)
  };
  const firstRun = useRef(true);
  const handleRemoveItem = index => {
    console.log("test",index)
    setUpdateList(updateList.filter((item,i) => i !== index))
};
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
const onChangeEdit =(index)=> (e: React.ChangeEvent<HTMLInputElement>) => {
  setUpdate((prevState) => ({
    ...prevState,
    [e.target.id]: e.target.value,
  }));
};
 
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setfruit(fruit);
    setFruitList([...fruitList,fruit]);
    setUpdateList([...updateList,fruit]);
  };
  const onSubmitEdit =(index)=> (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const copied=[...updateList]
    let item2 = {...updateList[index]};
    console.log(updated)
    item2=updated;
    item2.edit=false;
    copied[index]=item2;
    setUpdateList(copied)
 
    // setFruitList(fruitList.filter((i) => i !== index))
    // setFruitList([...fruitList,updated]);

    // setUpdate(updated);
    // const copyed1=[...fruitList]
    // setFruitList(copyed1.splice(index,1,updated));
    // setEdit(false)
  };

  // useEffect(() => {
  //   if (firstRun.current){
  //     firstRun.current=false;
  //     return
  //   }
  //    console.log(fruitList);
  // }, [updateList]); 

  return (
    <div id='submitted'>
      <form onSubmit={onSubmit}>
        <label className='labels' htmlFor="Name">Name: </label>
        <input type="text" id="Name"  onChange={onChange} />
        <label className='labels' htmlFor="Quantity">Quantity: </label>
        <input  type="number" id="Quantity"  onChange={onChange} />
        <IonButton color="success" type="submit">Add Grocery Item</IonButton>
      </form>

      {updateList.map((item,index)=>{
        return(
          <div key={index}>
        <IonCard>
          <IonCardHeader >
            <IonCardTitle  >
              Item: {item.Name} 
            </IonCardTitle>
            <IonCardSubtitle >
              Quantity: {item.Quantity}
            </IonCardSubtitle>
          </IonCardHeader>
          <IonButton color="danger"onClick={() =>handleRemoveItem(index)}>Remove Item </IonButton>
          <IonButton key={index} color="warning" onClick={()=>handleEdit(index)}>Edit Item </IonButton>
       </IonCard>
       {updateList[index].edit? <div key={index}>
         <form onSubmit={onSubmitEdit(index)} >
        <label className='labels' htmlFor="Name">Name: </label>
        <input type="text" id="Name"  onChange={onChangeEdit(index)} />
        <label className='labels' htmlFor="Quantity">Quantity: </label>
        <input  type="number" id="Quantity"  onChange={onChangeEdit(index)} />
        <IonButton color="warning" type="submit" onClick={()=>handleEdit(index)}>Submit Changes</IonButton>
      </form></div>:null }
        </div>)
      
    })
  } 

   </div>
    
  );
}