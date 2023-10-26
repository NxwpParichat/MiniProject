import createDataContext from "./createDataContext";

const examReducer = (state, action) => {
    
    switch (action.type) {
        
        case 'add-exam':
            return [
                ...state,
                {
                    id: Math.floor(Math.random()*99999),
                    subjectID: action.payload.subjectID,
                    subject: action.payload.subject,
                    section: action.payload.section,
                    professor: action.payload.professor,
                    date: action.payload.date,
                    starttime: action.payload.starttime,
                    timeend: action.payload.timeend,
                    room: action.payload.room,
                    more: action.payload.more,
                },
            ];
        case 'del-exam':
            return state.filter(exam=>exam.id != action.payload);
        case 'edit-exam':
            return state.map((exam) =>exam.id === action.payload.id? action.payload :exam);
        default:
            return state;
    }
};

    const addExam = dispatch => { 
        return(subjectID, subject, section, professor, date, starttime, timeend, room, more)=>{
            dispatch({type: 'add-exam', payload: { subjectID, subject, section, professor, date, starttime, timeend, room, more }});
        };
    };
    
    const delExam = dispatch=>{
        return id => {dispatch({type:'del-exam', payload:id})
        };
    };

    const editExam = dispatch => {
        return(id, subjectID, subject, section, professor, date, starttime, timeend, room, more) => {
            dispatch({type: 'edit-exam', payload: {id, subjectID, subject, section, professor, date, starttime, timeend, room, more}})
        };
    };

export const {Context,Provider} = createDataContext(
    examReducer,
    {addExam, delExam, editExam},
    []
);


