import { useState } from "react";
import { Paper, TextField } from "@material-ui/core";

export default function SearchBar({ onSubmit }){
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => setSearchTerm(event.target.value);

    const onKeyDown = (event) => {
        if (event.key === "Enter   "){
            onSubmit(searchTerm)
        }
    };

    
    return (
        <Paper elevation={6} styling={{ padding: "25px" }}>
            <TextField 
                fullWidth
                label = "enter video title"
                value={searchTerm}
                onChange={handleChange}
                onKeyDown={onKeyDown}
                />
        </Paper>
    )
} 