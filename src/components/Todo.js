
const Todo = ({todo,deleteHandle})=>{
    return (
        <div>
             <div className="row m-2 text-white h3 ">
                 <p className="p-2 col-8 bg-primary">{todo.todo}</p>
                 <p className="p-2 col-2 bg-warning hov">Edit</p>
                 <p className="p-2 col-2 bg-danger hov" onClick={()=>deleteHandle(todo.id)}>delete</p>
            </div>
        </div>
    );
}

export default Todo;