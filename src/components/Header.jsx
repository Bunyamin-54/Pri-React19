import { Button, Container, Grid, Typography } from "@mui/material"

const Header = () => {
    return (
        <Container maxWidth={"false"} sx={{  backgroundColor: '#FFC018' }} >
           
            <Grid container rowSpacing={2} pb={3}>
                <Grid item pl={10} mt={10} md={6} >
                    <Typography pb={3}  sx={{fontSize:{ xs:'3rem',  md:'3rem', lg:'5rem' }, lineHeight:1}} color="initial">Stay curious.</Typography>
                    <Typography pb={3} variant="h5" color="initial">Discover stories, thinking, <br /> <span>and expertise from writers on any topic.</span></Typography>
                    <Button  variant="outlined">Start Reading</Button>
                </Grid>
                <Grid item  md={6}  sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'flex-end', maxHeight: '400px', paddingRight:4 }}>
                    <svg  height="100%" viewBox="0 0 500 500">
                        <g id="R1" transform="translate(250 250)">
                            <ellipse rx="30" ry="0" opacity=".3">
                                <animateTransform attributeName="transform" type="rotate" dur="7s" from="0" to="360" repeatCount="indefinite" />
                                <animate attributeName="cx" dur="8s" values="-20; 220; -20" repeatCount="indefinite" />
                                <animate attributeName="ry" dur="3s" values="10; 60; 10" repeatCount="indefinite" />
                            </ellipse>
                        </g>
                        <use transform="rotate(72 250 250)" xlinkHref="#R1" />
                        <use transform="rotate(144 250 250)" xlinkHref="#R1" />
                        <use transform="rotate(216 250 250)" xlinkHref="#R1" />
                        <use transform="rotate(288 250 250)" xlinkHref="#R1" />
                    </svg>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Header