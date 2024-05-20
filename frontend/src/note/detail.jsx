import Note from "../components/note";
import { useParams } from "react-router-dom";

export default function NoteDetail() {
  const { noteId } = useParams();

  return (
    <div>
      <h1 className="text-2xl">Note</h1>
      <Note noteId={noteId} />
    </div>
  );
}
