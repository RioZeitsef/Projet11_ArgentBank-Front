import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateUserProfileMutation } from "../services/api";
import { loginSuccess } from "../slice/authSlice";
import Styles from "../css/Pages.module.css";

const EditUserForm = ({ onCancel }) => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState(user?.userName || "");
  const [updateUserProfile, { isLoading }] = useUpdateUserProfileMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await updateUserProfile({ userName }).unwrap();
      // Mettre à jour les informations utilisateur dans Redux
      
      dispatch(loginSuccess({
        user: response.body,
        token: localStorage.getItem('token')
      }));
      
      onCancel(); // Fermer le formulaire après la modification
    } catch (error) {
      console.error("Erreur lors de la mise à jour du profil:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={Styles["edit-form"]}>
      <div className={Styles["edit-content"]}>
        <div className={Styles["input-wrapper"]}>
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        
        <div className={Styles["edit-buttons"]}>
          <button type="submit" className={Styles["edit-button"]} disabled={isLoading}>
            {isLoading ? "Saving..." : "Save"}
          </button>
          <button 
            type="button" 
            className={Styles["edit-button-cancel"]} 
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditUserForm;