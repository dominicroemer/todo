
import {format, toDate, isDate} from 'date-fns';
import { formatRelativeWithOptions } from 'date-fns/fp';
import todoObj from './todoObj';

const projectObj = () => {
 
    let _projectName;
    let _todoList = [];
    let _projectCreationDate;
    let _dueDate;
    let _projectPriority;
    let _projectDiv;
    let _projectMenuOpen = false;

    const getInfo = () => {
        return `        _projectName: ${_projectName}
        _todoList: ${_todoList}
        _projectCreationDateDate: ${_projectCreationDate}
        _dueDate: ${_dueDate}
        _projectPriority: ${_projectPriority}
        _projectDiv: ${_projectDiv}
        _projectMenuOpen: ${_projectMenuOpen}`
    }

    const init = (projectName, todoList, creationDate, dueDate, projectPriority, projectDiv, projectMenuOpen) => {
        _projectName = projectName;
        _todoList = todoList;
        _projectCreationDate = creationDate;
        _dueDate = dueDate;
        _projectPriority = projectPriority;
        _projectDiv = projectDiv;
        _projectMenuOpen = projectMenuOpen;
        return true;
    }

    const getProjectName = () => {
        return _projectName;
    }

    const setProjectName = (newName) => {
        if( typeof newName === "string") {
            _projectName = newName; 
            return true;
        } else {
            console.log('projectObj.setProjectName Error! tried to pass a non-string into the _name field!');
            return false;
        }
    }

    const getProjectCreationDate = () => {
        return _projectCreationDate;
    }

    const setProjectCreationDate = (newCreationDate) => {
        if( isDate(newCreationDate)) {
            _projectCreationDate = newCreationDate; 
            return true;
        } else {
            console.log('projectObj.setProjectCreationDate Error! tried to pass a non-date into the _projectCreationDate field!');
            return false;
        }
    }
    
    const getProjectDueDate = () => {
        return _dueDate;
    }

    const setProjectDueDate = (newDueDate) => {
        if( isDate(newDueDate)) {
            _dueDate = newDueDate; 
            return true;
        } else {
            console.log('projectObj.setCreationDueDate Error! tried to pass a non-date into the _dueDate field!');
            return false;
        }
    }
    
    const getProjectPriority = () => {
        return _projectPriority;
    }

    const setProjectPriority = (newPriority) => {
        // This is a bit filthy. Should take numbers, 1,2,3,4,5, or string representation of these same numbers. XXXUPDATEXXX Clean this.
        if( typeof newPriority === "number" || typeof newPriority === "string" ) {
            _projectPriority = newPriority; 
            return true;
        } else {
            console.log('projectObj.setProjectPriorty Error! tried to pass a non-number into the _projectPriority field!');
            return false;
        }
    }

    const getProjectDiv = () => {
        return _projectDiv;
    }

    const setProjectDiv = (newDiv) => {
        _projectDiv = newDiv;
        return true;
    }

    const getProjectMenuOpen = () => {
        return _projectMenuOpen;
    }

    const setProjectMenuOpen = (menuOpen) => {
        if (typeof menuOpen === "boolean") {
            _projectMenuOpen = menuOpen;
            return _projectMenuOpen;
        } else {
            console.log("ERROR in setProjectMenuOpen! Tried to pass a non-boolean!")
            return;
        }
    }

    const toggleProjectMenuOpen = () => {
        if (_projectMenuOpen) {
            _projectMenuOpen = false;
        } else {
            _projectMenuOpen = true;
        }
    }

    const getTodoList = () => {
        return _todoList;
    }

    const setTodoList = (newTodoList) => {
        if( typeof newTodoList === "object") {
            // I can rewrite this with a loop and the args[] to take multiple new objects, but for my purposes, I will only ever be setting this todoList one array at a time
            _todoList = new Array(newTodoList);
            return true;
        } else {
            console.log('projectObj.setTodoList error! tried to pass a non-object into the _todoList field!');
            return false;
        }
    }

    const addTodo = (title, description, dueDate, creationDate, priority, notes, checklist, complete) => {
        const newTodo = todoObj();
        newTodo.init(title, description, dueDate, creationDate, priority, notes, checklist, complete);
        _todoList.push(newTodo);
    }

    const addTodoObj = (newTodo) => {

        if(typeof newTodo === "object") {
            _todoList.push(newTodo);
            return true;
        } else {
            console.log('projectObj.addTodoObj error! tried to pass a non-object to the _todoList!')
            return false;
        }           

    }

    // Takes an integer 'target'
    const removeTodo = (target) => {
        if(_todoList.length > 0) {
            _todoList.splice(target, 1);
            return true;
        } else {
            console.log('projectObj.removeTodo Error! tried to remove an element from an empty _todoList!');
            console.log(getTodoList());
            return false;
        }
    }

    const removeTargetTodo = (targetTodo) => {
        if(_todoList.length > 0) {
            let _newList = _todoList.filter(element => element != targetTodo);
            _todoList = _newList;
            return true;
        } else {
            console.log('projectObj.removeTargetTodo Error! tried to remove an element from an empty _todoList!');
            return false;
        }
    }

    const reorderTodo = (target, destination) => {
        if(target < _todoList.length && destination < _todoList.length) {
            // console.log('For Debugging: Console log of OLD _todoList: ');
            // console.log(getTodoList());
            _todoList.splice(destination, 0, (_todoList.splice(target, 1)[0]));
            // console.log('For Debugging: Console log of NEW _todoList: ');
            // console.log(getTodoList());
            return true;
        } else {
            console.log('projectObj.reorderTodo Error! Tried to pass a value greater than _todoList.length for target or destination!');
            return false;
        }
    }

    const writeProjectLocalStorage = (index) => {
        // console.log(`I am writeProjectLocal Storage, taking index: ${index}, targeting project: ${getProjectName()}`);
        // console.log(`Writing my values to localStorage`);

        // console.log(`My values are as follows: 
        // name: ${getProjectName()}
        // priority: ${getProjectPriority()}
        // dueDate: ${getProjectDueDate()}
        // creationDate: ${getProjectCreationDate()}
        // todoList: ${getTodoList()}
        // todoList.length: ${getTodoList().length}`);

        localStorage.setItem(`project${index}Name`, `${getProjectName()}`);
        localStorage.setItem(`project${index}Priority`, `${getProjectPriority()}`);
        localStorage.setItem(`project${index}DueDate`, `${getProjectDueDate()}`);
        localStorage.setItem(`project${index}CreationDate`, `${getProjectCreationDate()}`);
        localStorage.setItem(`project${index}TodoListLength`, `${getTodoList().length}`);

        // Set the follow to be a loop that runs over todoList and runs writeTodoLocalStorage() for each of them, taking projectIndex and todoIndex as a value
        for( let todoIndex = 0; todoIndex < getTodoList().length; todoIndex++ ) {
            // _projectArr[i].writeProjectLocalStorage(i);
            let result = getTodoList()[todoIndex].writeTodoLocalStorage(index, todoIndex);
            if (!result) {
                return false;
            }
        }

        // localStorage.setItem(`project${index}TodoList`, `${getTodoList()}`);

        return true;
    }


     return {
        getInfo,
        init,
        getProjectName, setProjectName,
        getProjectCreationDate, setProjectCreationDate,
        getProjectDueDate, setProjectDueDate,
        getProjectPriority, setProjectPriority,
        getProjectDiv, setProjectDiv,
        getProjectMenuOpen, setProjectMenuOpen, toggleProjectMenuOpen,
        getTodoList, setTodoList, addTodo, addTodoObj, removeTodo, removeTargetTodo, reorderTodo,
        writeProjectLocalStorage,
        
    }

}

export default projectObj;