import { Paper } from '@mui/material';

export default function Item({ imageUrl, description }) {
    return (
        <Paper>
            <img src={imageUrl} alt={description} style={{ width: "60vh", height: "80%" }} />
            <div className='description' style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <h2>{description}</h2>
            </div>
        </Paper>
    )
}

