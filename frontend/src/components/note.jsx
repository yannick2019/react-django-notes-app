import { useFetchData } from "../hooks/useFetchData";

const Note = ({ noteId }) => {
  const url = `http://127.0.0.1:8000/api/notes/${noteId}/`;
  const { data: note, error, loading } = useFetchData(url);

  if (loading) return <div>Loading...</div>;

  if (error) {
    console.error("Error ");
  }

  return (
    <div>
      <textarea
        defaultValue={note?.body}
        rows="5"
        cols="33"
        className=""
      ></textarea>
    </div>
  );
};

export default Note;
