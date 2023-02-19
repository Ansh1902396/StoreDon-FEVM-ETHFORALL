// ** React Imports
import { useState, Fragment } from 'react'
import styles from './sellerForm.module.css'
import Link from 'next/link'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Input from '@mui/material'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Google from 'mdi-material-ui/Google'
import Github from 'mdi-material-ui/Github'
import Twitter from 'mdi-material-ui/Twitter'
import Facebook from 'mdi-material-ui/Facebook'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

// ** Configs
import themeConfig from 'src/configs/themeConfig'
import buyerAbi from '../../views/abi/buyer.json'
import MessageSnackbar from '../../views/snackbar'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'
import Web3 from 'web3'

// ** Demo Imports
import FooterIllustrationsV1 from 'src/views/pages/auth/FooterIllustration'

// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' }
}))

const LinkStyled = styled('a')(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  marginTop: theme.spacing(1.5),
  marginBottom: theme.spacing(4),
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const SellerFormPage = () => {
  // ** States
  const [values, setValues] = useState(0)
  const [budgetErr, setBudgetErr] = useState(false)
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [typeSuccess, setTypeSuccess] = useState('')

  // ** Hook
  const theme = useTheme()
  const web3 = new Web3(
    Web3.givenProvider ||
    'https://api.hyperspace.node.glif.io/rpc/v1'
  )
  const nftaddress = '0x2D468b4Fbe35a14b27e47c264fDce63b230cbB1b'
  const handleOnChange = event => {
    let updatedFields = {}
    if (event.target.value !== '') {
      setBudgetErr(false)
    }
    updatedFields.budget = event.target.value
    setValues(updatedFields)
  }

  const handleClose = () => {
    setOpen(false);
  }

  const addBudget = async () => {
    if (values === 0) {
      setBudgetErr(true)
    } else {
      console.log(values, 'vvvvvvvv')
      const response = await axios.post(`http://localhost:8000/addask`, values)
      if (response) {
        setOpen(true);
        setMessage('Bought succesfully');
        setTypeSuccess('success')
      }
      else {
        setOpen(true);
        setMessage('Transaction failed. Please try again');
        setTypeSuccess('error')
      }
    }
  }

  return (
    <>
      <Grid container spacing={4} padding={0}>
        <Grid item xs={12} md={6}>
          <Box>
            <Card sx={{ zIndex: 1, height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: "100%" }}>
              <CardContent sx={{ padding: theme => `${theme.spacing(12, 9, 7)} !important` }}>
                <Box sx={{ mb: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg
                    width={35}
                    height={29}
                    version='1.1'
                    viewBox='0 0 30 23'
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                  >
                    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                      <g id='Artboard' transform='translate(-95.000000, -51.000000)'>
                        <g id='logo' transform='translate(95.000000, 50.000000)'>
                          <path
                            id='Combined-Shape'
                            fill={theme.palette.primary.main}
                            d='M30,21.3918362 C30,21.7535219 29.9019196,22.1084381 29.7162004,22.4188007 C29.1490236,23.366632 27.9208668,23.6752135 26.9730355,23.1080366 L26.9730355,23.1080366 L23.714971,21.1584295 C23.1114106,20.7972624 22.7419355,20.1455972 22.7419355,19.4422291 L22.7419355,19.4422291 L22.741,12.7425689 L15,17.1774194 L7.258,12.7425689 L7.25806452,19.4422291 C7.25806452,20.1455972 6.88858935,20.7972624 6.28502902,21.1584295 L3.0269645,23.1080366 C2.07913318,23.6752135 0.850976404,23.366632 0.283799571,22.4188007 C0.0980803893,22.1084381 2.0190442e-15,21.7535219 0,21.3918362 L0,3.58469444 L0.00548573643,3.43543209 L0.00548573643,3.43543209 L0,3.5715689 C3.0881846e-16,2.4669994 0.8954305,1.5715689 2,1.5715689 C2.36889529,1.5715689 2.73060353,1.67359571 3.04512412,1.86636639 L15,9.19354839 L26.9548759,1.86636639 C27.2693965,1.67359571 27.6311047,1.5715689 28,1.5715689 C29.1045695,1.5715689 30,2.4669994 30,3.5715689 L30,3.5715689 Z'
                          />
                          <polygon
                            id='Rectangle'
                            opacity='0.077704'
                            fill={theme.palette.common.black}
                            points='0 8.58870968 7.25806452 12.7505183 7.25806452 16.8305646'
                          />
                          <polygon
                            id='Rectangle'
                            opacity='0.077704'
                            fill={theme.palette.common.black}
                            points='0 8.58870968 7.25806452 12.6445567 7.25806452 15.1370162'
                          />
                          <polygon
                            id='Rectangle'
                            opacity='0.077704'
                            fill={theme.palette.common.black}
                            points='22.7419355 8.58870968 30 12.7417372 30 16.9537453'
                            transform='translate(26.370968, 12.771227) scale(-1, 1) translate(-26.370968, -12.771227) '
                          />
                          <polygon
                            id='Rectangle'
                            opacity='0.077704'
                            fill={theme.palette.common.black}
                            points='22.7419355 8.58870968 30 12.6409734 30 15.2601969'
                            transform='translate(26.370968, 11.924453) scale(-1, 1) translate(-26.370968, -11.924453) '
                          />
                          <path
                            id='Rectangle'
                            fillOpacity='0.15'
                            fill={theme.palette.common.white}
                            d='M3.04512412,1.86636639 L15,9.19354839 L15,9.19354839 L15,17.1774194 L0,8.58649679 L0,3.5715689 C3.0881846e-16,2.4669994 0.8954305,1.5715689 2,1.5715689 C2.36889529,1.5715689 2.73060353,1.67359571 3.04512412,1.86636639 Z'
                          />
                          <path
                            id='Rectangle'
                            fillOpacity='0.35'
                            fill={theme.palette.common.white}
                            transform='translate(22.500000, 8.588710) scale(-1, 1) translate(-22.500000, -8.588710) '
                            d='M18.0451241,1.86636639 L30,9.19354839 L30,9.19354839 L30,17.1774194 L15,8.58649679 L15,3.5715689 C15,2.4669994 15.8954305,1.5715689 17,1.5715689 C17.3688953,1.5715689 17.7306035,1.67359571 18.0451241,1.86636639 Z'
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  <Typography
                    variant='h6'
                    sx={{
                      ml: 3,
                      lineHeight: 1,
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      fontSize: '1.5rem !important'
                    }}
                  >
                    {themeConfig.templateName}
                  </Typography>
                </Box>
                <Box sx={{ mb: 6 }}>
                  <Typography variant='h5' sx={{ fontWeight: 600, marginBottom: 1.5 }}>
                    Sell here 🚀
                  </Typography>
                  {/* <Typography variant='body2'>Make your app management easy and fun!</Typography> */}
                </Box>
                <form noValidate autoComplete='off'>
                  <TextField
                    fullWidth
                    type='budget'
                    label='Budget'
                    sx={{ marginBottom: 4 }}
                    onClick={e => handleOnChange(e)}
                  />
                  {budgetErr ? <span className='text-red'>Please add budget</span> : ''}
                  <div className={styles.Formdiv}></div>

                  <Button
                    fullWidth
                    size='large'
                    type='button'
                    variant='contained'
                    sx={{ marginBottom: 7 }}
                    onClick={e => addBudget(e)}
                  >
                    SELL
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Card sx={{ zIndex: 1, height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: "100%" }}>
              <div>
                <Card
                  sx={{
                    zIndex: 1,
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box>
                    <CardContent
                      sx={{
                        m: 8,
                        padding: (theme) => `${theme.spacing(12, 9, 7)} !important`,
                      }}
                    >
                      <Box
                        sx={{
                          mb: 8,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            ml: 3,
                            lineHeight: 1,
                            fontWeight: 600,
                            textTransform: "uppercase",
                            fontSize: "1.5rem !important",
                          }}
                        >
                          Completed Orders
                        </Typography>
                      </Box>
                      <Box sx={{ mb: 6 }}>
                        <Typography
                          variant="h5"
                          sx={{ fontWeight: 600, marginBottom: 1.5 }}
                        >
                          Order ID: {/*  {orderId} */}
                        </Typography>
                        {/* <Typography variant='body2'>Make your app management easy and fun!</Typography> */}
                      </Box>
                      <Box sx={{ mb: 6 }}>
                        <Typography
                          variant="h5"
                          sx={{ fontWeight: 600, marginBottom: 1.5 }}
                        >
                          Data CID: {/*  {dataCidOrder} */}
                        </Typography>
                        {/* <Typography variant='body2'>Make your app management easy and fun!</Typography> */}
                      </Box>
                    </CardContent>
                    <CardContent
                      sx={{
                        m: 8,
                        padding: (theme) => `${theme.spacing(12, 9, 7)} !important`,
                      }}
                    >
                      <Box
                        sx={{
                          mb: 8,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            ml: 3,
                            lineHeight: 1,
                            fontWeight: 600,
                            textTransform: "uppercase",
                            fontSize: "1.5rem !important",
                          }}
                        >
                          Recently Added Bid
                        </Typography>
                      </Box>
                      <Box sx={{ mb: 6 }}>
                        <Typography
                          variant="h5"
                          sx={{ fontWeight: 600, marginBottom: 1.5 }}
                        >
                          Bid ID: {/*  {bidId} */}
                        </Typography>
                        {/* <Typography variant='body2'>Make your app management easy and fun!</Typography> */}
                      </Box>
                      <Box sx={{ mb: 6 }}>
                        <Typography
                          variant="h5"
                          sx={{ fontWeight: 600, marginBottom: 1.5 }}
                        >
                          Data CID: {/*  {dataCidBid} */}
                        </Typography>
                        {/* <Typography variant='body2'>Make your app management easy and fun!</Typography> */}
                      </Box>
                    </CardContent>
                  </Box>
                </Card>
              </div>
            </Card>
          </Box>
        </Grid>
      </Grid>
      <MessageSnackbar open={open} autoHideDuration={5000} onClose={handleClose} message={message} severity={typeSuccess} />
    </>
  )
}
SellerFormPage.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default SellerFormPage
