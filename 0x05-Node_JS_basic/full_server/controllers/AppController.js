module.exports = class AppController {
  static getHomepage(req, res) {
    res.status(200).send('Hello, World!');
  }
};
