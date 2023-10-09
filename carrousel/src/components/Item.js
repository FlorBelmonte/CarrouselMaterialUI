import { Paper } from '@mui/material'

export default function Item({item})
{
    return (
        <Paper>
            <img src={item.image} alt={item.title} style={{width: "60vh", height: "100%"}}/>
        <div className='description' style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <h2>{item.title}</h2>
            </div>

        </Paper>
    )
}