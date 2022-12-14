import React from 'react'
import { Button } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

export default function ButtonUploadPhoto(props) {
    return (
        <>
            {/* Create label for title of this camp, in this case the photo */}
            <label className="cols-sm-2 control-label">
                Subir tu foto
            </label>

            {/* Create button with its own styles */}
            <Button sx={{
                width: "100%",
                backgroundColor: "#ffc312",
            }} variant="contained" component="label">

                {/* Call the camera icon for this button */}
                <CameraAltIcon />
                 
                 {/* Create input type image for upload */}
                <input name={props.name} onChange={props.handleChange} hidden accept="image/*" multiple type="file" />

            </Button>
        </>
    )
}
