import React from "react";
import { useDispatch } from "react-redux";
import { createNewVote } from "../reducers/anecdoteReducer";

const AnecdoteForm = (props) => {
  const dispatch = useDispatch();

  const addNewVote = (event) => {
    event.preventDefault();
    const content = event.target.vote.value;
    event.target.vote.value = "";
    dispatch(createNewVote(content));
  };

  const handleCreateNewVote = ({ id }) => {
    dispatch({
      type: "ADD_NEWVOTE",
      data: {
        content: "",
        id: id,
      },
    });
  };

  return (
    <form onSubmit={addNewVote}>
      <h2>create new</h2>
      <div>
        <input name="vote" />
      </div>
      <button onClick={handleCreateNewVote}>create</button>
    </form>
  );
};

export default AnecdoteForm;
