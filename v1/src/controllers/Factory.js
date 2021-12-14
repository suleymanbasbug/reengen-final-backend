const {
  createService,
  listService,
  editFactoryService,
  deleteFactoryService,
} = require("../services/Factory");
const httpStatus = require("http-status");

const create = (req, res) => {
  createService(req.body)
    .then((response) => {
      res.status(httpStatus.CREATED).send(response);
    })
    .catch((error) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    });
};

const index = (req, res) => {
  listService()
    .then((response) => {
      res.status(httpStatus.OK).send(response);
    })
    .catch((error) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    });
};

const edit = (req, res) => {
  editFactoryService(req.params.id, req.body)
    .then((num) => {
      if (num == 1) {
        res
          .status(httpStatus.OK)
          .send({ message: "Factory was updated successfully" });
      } else {
        res.status(httpStatus.NOT_FOUND).send({ message: "Factory not found" });
      }
    })
    .catch((error) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    });
};

const destroy = (req, res) => {
  deleteFactoryService(req.params.id)
    .then((num) => {
      if (num == 1) {
        res
          .status(httpStatus.OK)
          .send({ message: "Factory was deleted successfully" });
      } else {
        res.status(httpStatus.NOT_FOUND).send({ message: "Factory not found" });
      }
    })
    .catch((error) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    });
};

module.exports = {
  create,
  index,
  edit,
  destroy,
};
