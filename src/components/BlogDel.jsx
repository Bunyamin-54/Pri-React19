import { Box, Button, Stack, Typography } from '@mui/material'

// eslint-disable-next-line react/prop-types
const BlogDel = ({handleClose}) => {
    return (
        <Box>
            <Typography variant="h5" color="initial" sx={{ mb: 2 }}>Do you really want to delete your blog? This process cannot be undone!</Typography>
            <Stack spacing={2} direction={{ md: 'column', lg: 'row' }} justifyContent={'center'}>
                <Button variant="contained" color="success" onClick={handleClose} >
                    Cancel
                </Button>
                <Button variant="outlined" color="error" >
                    Delete
                </Button>
            </Stack>
        </Box>
    )
}

export default BlogDel