import { useFetchData } from "../hooks/useFetchData";
import { Link } from "react-router-dom";

const Notes = () => {
  const url = "http://127.0.0.1:8000/api/notes/";
  const { data: notes, error, loading } = useFetchData(url);

  console.log(notes);

  if (loading) return <div>Loading...</div>;

  if (error) {
    console.error("Error occurs", error);
  }

  return (
    <div>
      {notes.map((note) => (
        <div key={note?.id}>
          <Link to={`/note/${note?.id}`}>{note?.body}</Link>
        </div>
      ))}
    </div>
  );
};

export default Notes;
