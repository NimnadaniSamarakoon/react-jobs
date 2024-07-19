import Cliploader from 'react-spinners/CircleLoader'

const override ={
    display: 'block',
    margine:' 100px auto',
};

const spinners = ({ loading }) => {

  return (
    <Cliploader
        color = '#4338ca'
        loading = {loading}
        cssOverride ={override}
        size = {150}
        />
      
    
  )
}

export default spinners
