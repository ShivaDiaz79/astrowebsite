import axios from 'axios';
import cheerio from 'cheerio';

const Skokka = async (req, res) => {
  try {
    const response = await axios.get('');
    const html = response.data;
    
    const $ = cheerio.load(html);
    const whatsappNumbers = [];

    $('phone-button').each((index, element) => {
      const whatsappNumber = $(element).attr('number');
      whatsappNumbers.push(whatsappNumber);
    });

    res.status(200).json({ numbers: whatsappNumbers });
  } catch (error) {
    console.error('Error en la extracción', error);
    res.status(500).json({ error: 'Error en la extracción' });
  }
};

export default Skokka;



