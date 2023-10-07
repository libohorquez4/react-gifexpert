import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView, NoteView } from "../views";
import { AddOutlined } from "@mui/icons-material";
import { startNewNote } from "../../store/journal/thunks";
import { useDispatch, useSelector } from "react-redux";
import { savingNewNote } from "../../store/journal/journalSlice";

export const JournalPage = () => {

  const { isSaving, active } = useSelector( state => state.journal );

  const dispatch = useDispatch();
  
  const onClickNewNote = () => {
    dispatch(startNewNote());
    dispatch(savingNewNote());
  }

  return (
    <JournalLayout>
      {
        (!!active) ? <NoteView /> : <NothingSelectedView />
      }
      
      

      <IconButton onClick={onClickNewNote} disabled={isSaving} size="large" sx={{ color: 'white', backgroundColor: 'error.main', ":hover": { backgroundColor: 'error.main', opacity: .9 }, position: 'fixed', right: 50, bottom: 50 }}>
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>

  )
}
