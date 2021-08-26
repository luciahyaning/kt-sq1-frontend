import { useState, useEffect } from "react";
import { Input, Button } from "reactstrap";
import { useAlert } from "react-alert";
import { INSERT_BUSSINESS } from "../../api/query";

import {
  useMutation,
} from "@apollo/client";

export const EditBussiness = ({ selectedItem }) => {
  const alert = useAlert();

  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");
  const [editBussiness, { data, loading, error }] = useMutation(INSERT_BUSSINESS, {
    errorPolicy: 'all'
  });

  useEffect(() => {
    if (selectedItem) {
      setName(selectedItem.name);
      setTag(selectedItem.tag);
      setDescription(selectedItem.description);
    }
  }, [description, name, tag, selectedItem]);

  return (
    <div>
      {
        loading &&
        'Submitting...'
      }
      {
        error &&
        error.message
      }
      {
        data && data.createBussiness &&
        'Input Success'
      }
      <form
        onSubmit={e => {
          e.preventDefault();
          editBussiness({
            variables: {
              description: description,
              name: name,
              tag: tag
            }
          });
          setName("");
          setTag("");
          setDescription("");
        }}
      >
        <label><b>Edit</b></label><br />

        <label>Name</label>
        <Input
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>description</label>
        <Input
          value={description}
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <label>tag</label>
        <Input
          value={tag}
          name="tag"
          onChange={(e) => setTag(e.target.value)}
        />
        <br />
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
}