import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, starUploading } from "../../actions/notes";

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);
  const handleSave = () => {
    dispatch(startSaveNote(active));
  };
  const inpuEl = useRef(null);

  const handlePictureUpload = () => {
    document.querySelector("#fileSelector").click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(starUploading(file));
      inpuEl.current.value = "";
    }
  };

  return (
    <div className="notes__appbar">
      <span>28 de agosto 2021</span>

      <input
        id="fileSelector"
        ref={inpuEl}
        type="file"
        name="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      <div>
        <button className="btn" onClick={handlePictureUpload}>
          Picture
        </button>
        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};
