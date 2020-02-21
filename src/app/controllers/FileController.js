import File from '../models/File';

class FileController {
  async store(req, res) {
    if (!req.file && !req.fileValidation) {
      return res.status(500).json({ error: 'An error ocurred' });
    }

    if (req.fileValidation) {
      return res.status(400).json({
        error: 'Make sure the file is an image',
      });
    }

    const { originalname: name, filename: path } = req.file;

    const file = await File.create({
      name,
      path,
    });

    return res.json(file);
  }
}

export default new FileController();
