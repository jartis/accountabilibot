import './app.component.scss';

import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
} from '@suid/material';

export default function App() {
    return (
        <Card>
            <CardContent>
                <Typography sx={{ fontSize: 14 }}>Hello World!</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    OK
                </Button>
                <Button size="small" color="secondary">
                    Cancel
                </Button>
            </CardActions>
        </Card>
    );
}
