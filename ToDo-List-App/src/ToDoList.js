import react, {useState} from 'react';

export default function ToDoList(){
    const [activity, setActivity]= useState("");
    const [listData, setlistData] =useState([]);
    function addActivity(){
        // setlistData([...listData,activity]);
        // console.log(listData)
        setlistData((listData)=>{
            const updateList =[...listData,activity];
            console.log(updateList)
            setActivity('');
            return updateList
        })
    }
    function removeActivity(i){
        const updateListData =listData.filter((elem,id)=>{
            return i=id;
        })
        setlistData(updateListData);
    }
    function removeAll(){
        setlistData([]);
    }
    return(
        <>
         <div className='container'>
        
            <div className='header'>ToDo List
              <div className=''>
                <input type='text' placeholder='Add Activity' value={activity} 
                onChange={(e)=>setActivity(e.target.value)}/>
                <button onClick={addActivity}>Add</button>
              </div>
            </div>
            <p className='Heera'>By :- Heera Jat</p>


            <div className='allList'>
            <h3 >Here is my list :-</h3>
              {listData!=[] && listData.map((data,i)=>{
                 return(
                    <>
                    <p key={i} className='nm'>
                        <div className='listData'>{data}</div>
                        <div className='btn-position'><button onClick={()=>removeActivity(i)}>
                            Remove(-)</button></div>
                    </p>
                    </>
                 )
               })}
              {listData.length>0 &&<p className='Heera'>"Self-belief and hard work will always earn you success." :- Virat Kohli</p>}
              <div className='removeAll'>
              {listData.length>0 && <br/>}
              {listData.length>1 &&<button onClick={removeAll}>Remove all</button> }
              </div>
            </div>
            
          </div>
        </>
    )
}