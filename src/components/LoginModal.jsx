import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Avatar, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from '@mui/material';
import { blue } from '@mui/material/colors';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import useAuthCall from '../hooks/useAuthCall';
import { useDispatch, useSelector } from 'react-redux';
import { modal } from '../features/authSlice';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 10,
};

// eslint-disable-next-line react/prop-types
export default function LoginModal() {

    const { login } = useAuthCall()
    const dispacth = useDispatch();

    const { loading , modalOpen} = useSelector(state => state.auth)

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={modalOpen}
                onClose={()=>dispacth(modal(false))}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={modalOpen}>
                    <Box sx={style}>

                        <Avatar
                            sx={{
                                backgroundColor: blue[300],
                                m: "auto",
                                mb: 3,
                                width: 40,
                                height: 40,
                            }}
                        >
                            <LockOpenIcon size="30" />
                        </Avatar>
                        <Typography pt={3} variant="h5" color="initial" textAlign={'center'} mb={3}>Join Us</Typography>
                        <Typography pt={3} variant="h5" color="initial" textAlign={'center'} mb={3}>ali@drl26.com</Typography>

                        <Formik
                            initialValues={{ email: "", password: "" }}
                            onSubmit={(values) => {
                                login(values)
                            }}
                        >
                            {
                                ({ handleChange, values }) => (
                                    <Form>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>

                                            <TextField
                                                id="standard-basic"
                                                label="Email"
                                                variant="standard"
                                                onChange={handleChange}
                                                value={values.email}
                                                name='email'
                                                type='email'

                                            />

                                            <FormControl variant="standard">
                                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                                <Input
                                                    id="standard-adornment-password"
                                                    type={showPassword ? 'text' : 'password'}
                                                    onChange={handleChange}
                                                    value={values.password}
                                                    name='password'
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowPassword}
                                                                onMouseDown={handleMouseDownPassword}
                                                            >
                                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>

                                            <Button variant='contained' sx={{ backgroundColor: 'black', borderRadius: 5, px: 4, py: 2 }} color="primary" type="submit">
                                                {
                                                    loading ? 'Loading...' : 'SIGN IN '
                                                }
                                            </Button>

                                        </Box>
                                    </Form>
                                )
                            }
                        </Formik>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
