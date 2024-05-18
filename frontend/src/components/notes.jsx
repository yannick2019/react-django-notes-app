import { useFetchData } from "../hooks/useFetchData";

export default function Notes() {
  const url = "http://127.0.0.1:8000/notes/";
  const { data: notes, error, loading } = useFetchData(url);

  if (loading) return <div>Loading...</div>;

  if (error) {
    console.error("Error occurs", error);
  }

  console.log(notes);

  return (
    <div>
      {notes.map((note) => (
        <div key={note.id}>{note.body}</div>
      ))}
    </div>
  );
}
