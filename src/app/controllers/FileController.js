import File from '../models/File';

class FileController {
  async store(req, res) {
    if (!req.file) {
      return res.json({
        error: 'An error occurred, make sure the file is an image file',
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
