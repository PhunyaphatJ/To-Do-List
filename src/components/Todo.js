
const Todo = ({todo})=>{
    return (
        <div>
            <div className="container p-3 m-2 bg-primary h2 text-light">
                <p>{todo}</p>
            </div>
         
        </div>
    );
}

export default Todo;