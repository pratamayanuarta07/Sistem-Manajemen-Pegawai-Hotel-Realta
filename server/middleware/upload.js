const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/posting'); // Direktori tempat file akan disimpan
    },
    filename: (req, file, cb) => {
        const ext = file.originalname.split('.').pop();
        const new_name = Math.round(Math.random()*1E9)+'.'+ext; 
        cb(null, new_name);
    },
  });

  const storage2 = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/profile'); // Direktori tempat file akan disimpan
    },
    filename: (req, file, cb) => {
        const ext = file.originalname.split('.').pop();
        const new_name = 'image'+Math.round(Math.random()*1E9)+'.'+ext; 
        cb(null, new_name);
    },
  });

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
      // Terima file dengan tipe MIME 'image/jpeg' atau 'image/png'
      console.log(req.headers['content-length']);
      if (req.headers['content-length'] < 190000) {
        cb(null, true);  
      }
      else{
        cb('Ukuran terlalu besar', false);
      }
      
    } else {
      console.log(file.originalname);
      const error = new Error('File type is not supported');
      error.status = 400;
      
      cb(error);
      // Tolak file dengan tipe MIME lainnya
      //cb('Ekstensi File Bukan Gambar', false);
    }
};

const upload2 = multer({ storage: storage2, fileFilter: fileFilter, });

module.exports = upload2;