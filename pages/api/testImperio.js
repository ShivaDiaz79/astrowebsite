//  Changed to handler
const handler = async (req, res) => {

  
    
console.log('MIRRRRRRRRA');
console.log(req.body, 'req.data');
      
  

    res.status(200).json({ data: 'Hola' })

}

export default handler