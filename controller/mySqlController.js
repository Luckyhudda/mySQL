const {
  createUser,
  getUser,
  getAllUser,
  updateUser,
  deleteUser,
} = require("./../userModal/userModal");

const mySqlController = {
  Post: (req, res) => {
    createUser(req.body)
      .then((result) => {
        res.status(201).json({
          message: "success",
          data: {
            result,
          },
        });
      })
      .catch((err) => {
        res.status(400).json({
          error: err,
        });
      });
  },
  GetOne: (req, res) => {
    getUser(req.params.id)
      .then((result) => {
        res.status(201).json({
          message: "success",
          data: {
            result,
          },
        });
      })
      .catch((err) => {
        res.status(400).json({
          error: err,
        });
      });
  },
  GetAll: (req, res) => {
    getAllUser()
      .then((result) => {
        res.status(201).json({
          message: "success",
          total: result.length,
          data: {
            result,
          },
        });
      })
      .catch((err) => {
        res.status(400).json({
          error: err,
        });
      });
  },
  Put: (req, res) => {
    updateUser(req.body, req.params.id)
      .then((result) => {
        res.status(201).json({
          message: "success",
          data: {
            result,
          },
        });
      })
      .catch((err) => {
        res.status(400).json({
          error: err,
        });
      });
  },
  Delete: (req, res) => {
    deleteUser(req.params.id)
      .then((result) => {
        res.status(201).json({
          message: "success",
          data: {
            result,
          },
        });
      })
      .catch((err) => {
        res.status(400).json({
          error: err,
        });
      });
  },
};

module.exports = mySqlController;
