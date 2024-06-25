import React from "react";

type Props = {};

const NewBlogForm = (props: Props) => {
  return (
    <div>
      <form>
        <input type="text"></input>
        <textarea />
        <button type="submit" />
        <h2>Create</h2>
      </form>
    </div>
  );
};

export default NewBlogForm;
