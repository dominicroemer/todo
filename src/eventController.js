// I am eventController, I am an object that assigns event functions to div's that are passed to me via logicController.

// import logicController from "./logicController.js";

const eventController = ( logicControllerReference ) => {

    // console.log(logicControllerReference);

    let _menuOpen = false;
    const _logicController = logicControllerReference;
    // console.log("I am _logicController: " + _logicController);
    // console.log(_logicController);


    const _toggleMenuOpen = () => {
        if(menuOpen) {
            _menuOpen = false;
        } else {
            _menuOpen = true;
        }
    }

    const attachProjectContainerAddButtonListener = (div) => {
        div.addEventListener('click', () => {
            _logicController._toggleProjectContainerAddButtonMenu();
        })
    };

    const attachAddProjectPrioritySlider = (inputDivValue, targetDiv) => {
        inputDivValue.addEventListener('input', () => {
            _logicController._updatePriorityColor(targetDiv, inputDivValue.value);
        })
    }

    const attachProjectTodoPrioritySlider = (inputDivValue, targetDiv) => {
        inputDivValue.addEventListener('input', () => {
            _logicController._updateTodoPriorityColor(targetDiv, inputDivValue.value);
        })
    }

    const attachAddProjectSave = (targetDiv, values) => {
        // console.log(values);
        targetDiv.addEventListener('click', () => {
            // console.log('you clicked save');
            // console.log(values);
            _logicController._addProjectSaveButton(values);
        });
    }

    const attachAddProjectCancel = (div, parentMenuDiv) => {
        div.addEventListener('click', () => {
            _logicController._addProjectCancelButton(parentMenuDiv);
        })
    }

    const attachProjectEditButton = (targetDiv, targetObject) => {
        targetDiv.addEventListener('click', () => {
            _logicController._editProject(targetObject);
        })
    }

    const attachProjectEditSaveButton = (targetDiv, targetProject, savedInputs) => {
        targetDiv.addEventListener('click', () => {
            _logicController._editProjectSaveButton(targetProject, savedInputs);
        });
    }

    const attachProjectEditCancelButton = (targetDiv, targetProject) => {
        targetDiv.addEventListener('click', () => {
            _logicController._editProjectCancelButton(targetProject);
        });
    }

    const attachProjectEditDeleteButton = (targetDiv, targetProject) => {
        targetDiv.addEventListener('click', () => {
            _logicController._editProjectDeleteButton(targetProject);
        });
    }

    const attachProjectTodoAddButton = (targetDiv, targetProject ) => {
        targetDiv.addEventListener('click', () => {
            _logicController._projectAddTodoButton(targetProject);
        })
    }

    const attachProjectTodoDeleteButton = (targetDiv, targetProject ) => {
        targetDiv.addEventListener('click', () => {
            _logicController._projectDeleteTodoButton(targetProject);

        })
    }

    const attachProjectAddTodoSaveButton = (targetSaveButton, targetProject, addTodoPane, savedValues) => {
        targetSaveButton.addEventListener('click', () => {
            _logicController._projectAddTodoSaveButton(targetProject, addTodoPane, savedValues);
        })
    }

    const attachProjectAddTodoCancelButton = (targetCancelButton, targetProject, addTodoPane) => {
        // console.log('here');
        targetCancelButton.addEventListener('click', () => {
            _logicController._projectAddTodoCancelButton(targetProject, addTodoPane);
        })
    }

    const attachSelectTodoForDeletion = (targetTodoDiv) => {
        targetTodoDiv.addEventListener('click', () => {
            // console.log('You clicked a todo Div in the delete pane!');
            _logicController._toggleSelectedDivForDeletion(targetTodoDiv)
        })
    }

    const attachProjectDeleteSelectedButton = (targetDeleteSelectedButton, targetProject, deleteTodoPane, todoPaneList) => {
        targetDeleteSelectedButton.addEventListener('click', () => {
            _logicController._projectDeleteTodoSelectedButton(targetProject, deleteTodoPane, todoPaneList);
        })
    }

    const attachProjectDeleteCancelButton = (targetDeleteCancel, targetProject, deleteTodoPane) => {
        targetDeleteCancel.addEventListener('click', () => {

            
            _logicController._projectDeleteTodoCancelButton(targetProject, deleteTodoPane);

            // _logicController._projectAddTodoCancelButton(targetProject, addTodoPane);
        })
    }

    const attachProjectDeleteCompletedButton = (targetDeleteCompletedButton, targetProject, deleteTodoPane, todoPaneList) => {
        targetDeleteCompletedButton.addEventListener('click', () => {
            // console.log(`You cliked the Delete Completed button from project: `)
            // console.log(targetProject.getProjectName());
            
            _logicController._projectDeleteTodoCompletedButton(targetProject, deleteTodoPane, todoPaneList);
        })
    }

    const attachTodoListeners = (targetTodo, targetProject) => {
        const targetTodoDiv = targetTodo.getTodoDiv();
        targetTodoDiv.firstChild.addEventListener('click', () => {
            // console.log(`You clicked the first child of ${targetTodoDiv}`)
            _logicController._toggleCompletedTodo(targetTodo);
        })
        targetTodoDiv.firstChild.nextSibling.addEventListener('click', () => {
            // console.log(`You clicked the second child of ${targetTodoDiv}`)
            _logicController._toggleCompletedTodo(targetTodo);
        })
        targetTodoDiv.lastChild.addEventListener('click', () => {
            // console.log(`You clicked the last child of ${targetTodoDiv}`)
            _logicController._editTodoPane(targetTodo, targetProject);
        })
    }

    const attachEditTodoSaveButton = (targetSaveButton, targetProject, targetTodo, editTodoPaneDiv, savedValues) => {
        targetSaveButton.addEventListener('click', () => {
            _logicController._projectEditTodoSaveButton(targetProject, targetTodo, editTodoPaneDiv, savedValues);
        })
    }

    const attachEditTodoCancelButton = (targetCancelButton, targetProject, editTodoPaneDiv) => {
        targetCancelButton.addEventListener('click', () => {
            _logicController._projectAddTodoCancelButton(targetProject, editTodoPaneDiv);

        })
    }


    return {
        _toggleMenuOpen,
        attachProjectContainerAddButtonListener,
        attachAddProjectCancel,
        attachAddProjectPrioritySlider,
        attachProjectTodoPrioritySlider,
        attachAddProjectSave,
        attachProjectEditButton,
        attachProjectEditSaveButton,
        attachProjectEditCancelButton,
        attachProjectEditDeleteButton,
        attachProjectTodoAddButton,
        attachProjectTodoDeleteButton,
        attachProjectAddTodoSaveButton,
        attachProjectAddTodoCancelButton,
        attachSelectTodoForDeletion,
        attachProjectDeleteSelectedButton,
        attachProjectDeleteCancelButton,
        attachProjectDeleteCompletedButton,
        attachTodoListeners,
        attachEditTodoSaveButton,
        attachEditTodoCancelButton,



    }

}



export default eventController;